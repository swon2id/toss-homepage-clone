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
  }

  run() {
    // 새로고침 대응
    this.checkScrollYPosForSection2();

    // 이벤트 리스너 추가
    window.addEventListener("scroll", () => this.checkScrollYPosForSection2());
  }

  checkScrollYPosForSection2() {
    if (this.isSection2Revealed) return;

    const firstH2Position =
      this.section2H2Elements[0].getBoundingClientRect().top;
    const lastH2Position =
      this.section2H2Elements[
        this.section2H2Elements.length - 1
      ].getBoundingClientRect().top;
    const triggerPosition = (firstH2Position + lastH2Position) / 2;
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
}

const contentRevealer = new ContentRevealer();
export default contentRevealer;
