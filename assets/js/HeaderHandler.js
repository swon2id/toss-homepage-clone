class HeaderHandler {
  constructor(headerSelector = "header", scrolledClass = "scrolled") {
    this.header = document.querySelector(headerSelector);
    this.scrolledClass = scrolledClass;
    this.mobileMenuOpenButton = document.querySelector(
      ".header__mobile-menu-open-btn"
    );
    this.mobileMenuCloseButton = document.querySelector(
      ".header__mobile-menu-close-btn"
    );
  }

  run() {
    window.addEventListener("scroll", this.checkScroll.bind(this));
    window.addEventListener("resize", this.handleResize.bind(this));

    this.mobileMenuOpenButton.addEventListener("click", () => {
      this.toggleMenuButtons(
        this.mobileMenuOpenButton,
        this.mobileMenuCloseButton
      );
      this.expandHeader();
    });

    this.mobileMenuCloseButton.addEventListener("click", () => {
      this.toggleMenuButtons(
        this.mobileMenuCloseButton,
        this.mobileMenuOpenButton
      );
      this.collapseHeader();
    });

    if (this.header) {
      this.checkScroll();
    }
  }

  checkScroll() {
    if (window.scrollY === 0) {
      this.header.classList.remove(this.scrolledClass);
    } else {
      this.header.classList.add(this.scrolledClass);
    }
  }

  handleResize() {
    const windowWidth = window.innerWidth;
    if (windowWidth < 640) return;
    this.header.style.height = "";
    this.toggleMenuButtons(
      this.mobileMenuCloseButton,
      this.mobileMenuOpenButton
    );
  }

  toggleMenuButtons(hideButton, showButton) {
    hideButton.style.display = "none";
    showButton.style.display = "flex";
  }

  expandHeader() {
    if (this.header) {
      this.header.style.height = "453px";
    }
  }

  collapseHeader() {
    if (this.header) {
      this.header.style.height = "60px";
    }
  }
}

const headerHandler = new HeaderHandler();
export default headerHandler;
