class CurtainAnimationHandler {
  constructor(sectionSelector) {
    this.section = document.querySelector(sectionSelector);
    this.coverLeft = this.section.querySelector(".section07-cover--left");
    this.coverRight = this.section.querySelector(".section07-cover--right");
    this.maxTranslateX = (window.innerWidth - 1040) / 2;
    this.bindEvents();
  }

  bindEvents() {
    window.addEventListener("scroll", () => this.onScroll());
  }

  onScroll() {
    const sectionRect = this.section.getBoundingClientRect();
    const sectionTop = window.scrollY + sectionRect.top;
    const sectionHeight = sectionRect.height;
    const windowHeight = window.innerHeight;
    const windowBottom = window.scrollY + windowHeight;

    const startPoint = sectionTop + 0.32 * sectionHeight;
    const endPoint = sectionTop + sectionHeight + 0.32 * sectionHeight;

    let progress = (windowBottom - startPoint) / (endPoint - startPoint);
    progress = Math.max(0, Math.min(progress, 1));

    const translateX = progress * this.maxTranslateX;

    this.coverLeft.style.transform = `translateX(${-translateX}px)`;
    this.coverRight.style.transform = `translateX(${translateX}px)`;
  }
}

export default CurtainAnimationHandler;
