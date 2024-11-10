class ContentRevealer {
  constructor() {
    this.section2H1Element = document.querySelector(
      ".home-and-consume__contents h1"
    );
    this.section2H2Elements = document.querySelectorAll(
      ".home-and-consume__contents h2"
    );
    this.section2RightImageElement = document.querySelector(
      ".home-and-consume__contents__image--right"
    );
    this.section2LeftImageElement = document.querySelector(
      ".home-and-consume__contents__image--left"
    );
    this.section2LastDivElement = document.querySelector(
      ".home-and-consume__contents > div:last-child"
    );
    this.isSection2Revealed = false;

    this.section3H1Element = document.querySelector(".remittance__contents h1");
    this.section3H2Elements = document.querySelectorAll(
      ".remittance__contents h2"
    );
    this.section3DivElements = document.querySelectorAll(
      ".remittance__contents > div > div"
    );
    this.section3ImageElements = document.querySelectorAll(
      ".remittance__contents > div > img"
    );
    this.isSection3Revealed = false;

    this.section4H1 = document.querySelector(".loan-contents__sub-div01 h1");
    this.section4H2List = document.querySelectorAll(
      ".loan-contents__sub-div01 h2"
    );
    this.section4Image = document.querySelector(
      ".loan-contents__sub-div02__inner"
    );
    this.section4BottomTextList = document.querySelectorAll(
      ".loan-contents__sub-div03 > p:nth-child(3) ~ p"
    );
    this.section4MidText1 = document.querySelector(
      ".loan-contents__sub-div03 > p:nth-child(1)"
    );
    this.section4MidText2 = document.querySelector(
      ".loan-contents__sub-div03 > p:nth-child(2)"
    );
    this.section4MidText3 = document.querySelector(
      ".loan-contents__sub-div03 > p:nth-child(3)"
    );
    this.isSection4Revealed = false;

    this.section5SubDivElement1 = document.querySelector(
      ".credit-contents__sub-div01"
    );
    this.section5SubDivElement2 = document.querySelector(
      ".credit-contents__sub-div02"
    );
    this.section5SubDivElement2Mobile = document.querySelector(
      ".credit-contents__sub-div02--mobile"
    );
    this.isSection5Revealed = false;

    this.section6Title = document.querySelector(".invest-contents__title");
    this.section6Text1 = document.querySelector(
      ".invest-sub-section02 > div:nth-child(2) > div"
    );
    this.section6Text2 = document.querySelector(
      ".invest-sub-section02 > div:nth-child(3) > div"
    );
    this.section6Text3 = document.querySelector(
      ".invest-sub-section03 > div:first-child"
    );
    this.section6Text3Mobile = document.querySelector(
      ".invest-sub-section03 > div:not(:first-child)"
    );
    this.isSection6Revealed = false;

    this.section7Image1 = document.querySelector(
      ".gallery-contents__item:nth-child(3) img"
    );
    this.section7Image2 = document.querySelector(
      ".gallery-contents__item:nth-child(4) > div:first-child img"
    );
    this.section7Image3 = document.querySelector(
      ".gallery-contents__item:nth-child(4) > div:last-child img"
    );
    this.section7Image4 = document.querySelector(
      ".gallery-contents__item:nth-child(5) img"
    );
  }

  run() {
    // 새로고침 대응
    this.checkScrollYPosForSection2();
    this.checkScrollYPosForSection3();
    this.checkScrollYPosForSection4();
    this.checkScrollYPosForSection5();
    this.checkScrollYPosForSection6();
    this.checkScrollYPosForSection7();

    // 이벤트 리스너 추가
    window.addEventListener("scroll", () => this.checkScrollYPosForSection2());
    window.addEventListener("scroll", () => this.checkScrollYPosForSection3());
    window.addEventListener("scroll", () => this.checkScrollYPosForSection4());
    window.addEventListener("scroll", () => this.checkScrollYPosForSection5());
    window.addEventListener("scroll", () => this.checkScrollYPosForSection6());
    window.addEventListener("scroll", () => this.checkScrollYPosForSection7());
  }

  checkScrollYPosForSection2() {
    if (this.isSection2Revealed) return;

    const topPosition = this.section2H1Element.getBoundingClientRect().top;
    const bottomPosition =
      this.section2H2Elements[
        this.section2H2Elements.length - 1
      ].getBoundingClientRect().bottom;
    const triggerPosition = (topPosition + bottomPosition) / 2;
    const windowHeight = window.innerHeight;

    if (triggerPosition <= windowHeight) {
      this.isSection2Revealed = true;
      this.section2H1Element.classList.add("reveal");
      this.section2H2Elements.forEach((h2) => {
        h2.classList.add("reveal");
      });

      const lastH2Element =
        this.section2H2Elements[this.section2H2Elements.length - 1];
      lastH2Element.addEventListener(
        "animationend",
        () => {
          this.section2RightImageElement.classList.add("reveal");

          this.section2RightImageElement.addEventListener(
            "animationend",
            () => {
              this.section2LeftImageElement.classList.add("reveal");

              this.section2LeftImageElement.addEventListener(
                "animationend",
                () => {
                  this.section2LastDivElement.classList.add("reveal");
                },
                { once: true }
              );
            },
            { once: true }
          );
        },
        { once: true }
      );
    }
  }

  checkScrollYPosForSection3() {
    if (this.isSection3Revealed) return;

    const topPosition = this.section3H1Element.getBoundingClientRect().top;
    const bottomPosition =
      this.section3H2Elements[
        this.section3H2Elements.length - 1
      ].getBoundingClientRect().bottom;
    const triggerPosition = (topPosition + bottomPosition) / 2;
    const windowHeight = window.innerHeight;

    if (triggerPosition <= windowHeight) {
      this.isSection3Revealed = true;
      this.section3H1Element.classList.add("reveal");
      this.section3H2Elements.forEach((h2) => {
        h2.classList.add("reveal");
      });

      const lastH2Element =
        this.section3H2Elements[this.section3H2Elements.length - 1];
      lastH2Element.addEventListener(
        "animationend",
        () => {
          this.section3DivElements.forEach((div) => {
            div.classList.add("reveal");
          });

          setTimeout(() => {
            this.section3ImageElements.forEach((img) => {
              img.classList.add("reveal");
            });
          }, 300);
        },
        { once: true }
      );
    }
  }

  checkScrollYPosForSection4() {
    if (this.isSection4Revealed) return;

    const topPosition = this.section4H1.getBoundingClientRect().top;
    const bottomPosition =
      this.section4H2List[
        this.section4H2List.length - 1
      ].getBoundingClientRect().bottom;
    const triggerPosition = (topPosition + bottomPosition) / 2;
    const windowHeight = window.innerHeight;

    if (triggerPosition <= windowHeight) {
      this.isSection4Revealed = true;
      this.section4H1.classList.add("reveal", "reveal--first");
      this.section4H2List.forEach((h2) => {
        h2.classList.add("reveal", "reveal--first");
      });
      this.section4Image.classList.add("reveal", "reveal--second");
      this.section4BottomTextList.forEach((p) => {
        p.classList.add("reveal", "reveal--third");
      });
      this.section4MidText1.classList.add("reveal", "reveal--fourth");
      this.section4MidText2.classList.add("reveal", "reveal--fifth");
      this.section4MidText3.classList.add("reveal", "reveal--sixth");
    }
  }

  checkScrollYPosForSection5() {
    if (this.isSection5Revealed) return;

    const topPosition = this.section5SubDivElement1.getBoundingClientRect().top;
    const bottomPosition =
      this.section5SubDivElement1.getBoundingClientRect().bottom;
    const triggerPosition = (topPosition + bottomPosition) / 2;
    const windowHeight = window.innerHeight;

    if (triggerPosition <= windowHeight) {
      this.isSection5Revealed = true;
      this.section5SubDivElement1.classList.add("reveal", "reveal--first");
      this.section5SubDivElement2.classList.add("reveal", "reveal--second");
      this.section5SubDivElement2Mobile.classList.add(
        "reveal",
        "reveal--second"
      );
    }
  }

  checkScrollYPosForSection6() {
    if (this.isSection6Revealed) return;

    const topPosition = this.section6Title.getBoundingClientRect().top;
    const bottomPosition = this.section6Title.getBoundingClientRect().bottom;
    const triggerPosition = (topPosition + bottomPosition) / 2;
    const windowHeight = window.innerHeight;

    if (triggerPosition <= windowHeight) {
      this.isSection6Revealed = true;
      this.section6Title.classList.add("reveal", "reveal--first");
      this.section6Text1.classList.add("reveal", "reveal--second");
      this.section6Text2.classList.add("reveal", "reveal--third");
      this.section6Text3.classList.add("reveal", "reveal--fourth");
      this.section6Text3Mobile.classList.add("reveal", "reveal--fourth");
    }
  }

  checkScrollYPosForSection7() {
    const elements = [
      this.section7Image1,
      this.section7Image2,
      this.section7Image3,
      this.section7Image4,
    ];

    elements.forEach((element) => {
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;

        // 요소가 화면에 보이는 비율 계산
        const visiblePart =
          Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const visibleRatio = visiblePart / elementHeight;

        const clampedVisibleRatio = Math.max(0, Math.min(visibleRatio, 1));
        const opacity = Math.min(clampedVisibleRatio / 0.75, 1);
        element.style.opacity = opacity;
      }
    });
  }
}

const contentRevealer = new ContentRevealer();
export default contentRevealer;
