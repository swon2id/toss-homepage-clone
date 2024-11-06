class MainBannerHandler {
  constructor(buttonSelector, scrollDstTargetSelector, iconGroupSelector) {
    // DOM 요소 선택
    this.button = document.querySelector(buttonSelector);
    this.buttonInnerDiv = this.button.querySelector('div');
    this.scrollDstTargetSelector = document.querySelector(
      scrollDstTargetSelector
    );
    this.iconGroup = document.querySelector(iconGroupSelector);

    // 아이콘 클릭 시 화면 스크롤 이동 이벤트 관련 값 초기화
    this.headerOffset = 59; // 헤더 height 값 (59px)
    this.scrollDuration = 300; // 스크롤 소요 시간 (300ms)

    // 아이콘 애니메이션 관련 값 초기화
    this.movementDuration = 3250; // 애니메이션 재생 시간 (3250ms)
    this.pauseDuration = 250; // 애니메이션 재생 간격 텀 시간 (250ms)
    this.totalCycleDuration = this.movementDuration + this.pauseDuration; // 애니메이션 한 사이클 지속 시간 (3500ms)
    this.iconOriginalOpacity =
      parseFloat(this.iconGroup.getAttribute('opacity')) || 1;
    this.iconAnimationStartTime = null;

    this.addEventListeners();
    this.init();
  }

  init() {
    if (this.iconGroup) {
      this.buttonInnerDiv.style.transform = 'scale(0.75)';
      requestAnimationFrame(this.animateIconGroup.bind(this));
    }
  }

  addEventListeners() {
    if (this.button && this.scrollDstTargetSelector) {
      this.button.addEventListener('click', this.handleButtonClick.bind(this));
    }
  }

  // 버튼 클릭 시 스크롤 이동 처리
  handleButtonClick(event) {
    event.preventDefault();

    const startY = window.scrollY;
    const targetY =
      this.scrollDstTargetSelector.getBoundingClientRect().top +
      window.scrollY -
      this.headerOffset;
    const distance = targetY - startY;
    const duration = this.scrollDuration;
    let scrollStartTime = null;

    function scroll(timestamp) {
      if (scrollStartTime === null) scrollStartTime = timestamp;
      const elapsed = timestamp - scrollStartTime;
      const progress = Math.min(elapsed / duration, 1);

      const ease =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      window.scrollTo(0, startY + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(scroll);
      }
    }

    requestAnimationFrame(scroll);
  }

  // 아이콘 그룹 애니메이션 처리
  animateIconGroup(timestamp) {
    if (this.iconAnimationStartTime === null) {
      this.iconAnimationStartTime = timestamp;
    }

    const elapsed =
      (timestamp - this.iconAnimationStartTime) % this.totalCycleDuration;

    // 애니메이션 효과 재생
    if (elapsed < this.movementDuration) {
      const movementProgress = elapsed / this.movementDuration;
      const positionY = this.calculatePosition(movementProgress);
      const opacity = this.calculateOpacity(movementProgress);
      const scale = this.calculateScale(movementProgress);

      this.iconGroup.setAttribute(
        'transform',
        `matrix(0.3134367763996124, 0, 0, 0.3134367763996124, 11.140670776367188, ${positionY})`
      );
      this.iconGroup.setAttribute('opacity', opacity);
      this.buttonInnerDiv.style.transform = `scale(${scale})`;
    }

    // 애니메이션 한 사이클 재생 텀 처리
    else {
      this.iconGroup.setAttribute(
        'transform',
        `matrix(0.3134367763996124, 0, 0, 0.3134367763996124, 11.140670776367188, 0)`
      );
      this.iconGroup.setAttribute('opacity', 0);
      this.buttonInnerDiv.style.transform = 'scale(0.75)';
    }

    requestAnimationFrame(this.animateIconGroup.bind(this));
  }

  // 아이콘 위치 계산
  calculatePosition(progress) {
    let positionY;

    if (progress < 0.2) {
      const localProgress = progress / 0.2;
      positionY = this.easeOutCubic(localProgress) * 100;
    } else if (progress < 0.6) {
      const localProgress = (progress - 0.2) / 0.4;
      positionY = 100 - this.easeInOutQuad(localProgress) * 60;
    } else if (progress < 0.8) {
      const localProgress = (progress - 0.6) / 0.2;
      positionY = 40 + this.easeInOutQuad(localProgress) * 60;
    } else {
      const localProgress = (progress - 0.8) / 0.2;
      positionY = 100 - this.easeInCubic(localProgress) * 75;
    }

    return positionY;
  }

  // 버튼 inner div scaleX 계산
  calculateScale(progress) {
    if (progress < 0.1) {
      const localProgress = progress / 0.1;
      return 0.75 + 0.25 * localProgress;
    } else {
      return 1;
    }
  }

  // 아이콘 투명도 계산
  calculateOpacity(progress) {
    if (progress < 0.5)
      return this.easeOutCubic(progress / 0.5) * this.iconOriginalOpacity;
    else if (progress > 0.75)
      return (
        (1 - this.easeInCubic((progress - 0.75) / 0.25)) *
        this.iconOriginalOpacity
      );
    else return this.iconOriginalOpacity;
  }

  // 아이콘 위치 및 투명도 4차 함수 파형(변곡점 3개 형태)으로 계산하는 메서드들
  easeInCubic(t) {
    return t * t * t;
  }

  easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }
}

export default MainBannerHandler;
