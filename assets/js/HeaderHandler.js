class HeaderHandler {
  constructor(headerSelector = 'header', scrolledClass = 'scrolled') {
    this.header = document.querySelector(headerSelector);
    this.scrolledClass = scrolledClass;

    this.addEventListeners();
    this.init();
  }

  init() {
    if (this.header) {
      this.checkScroll();
    }
  }

  addEventListeners() {
    window.addEventListener('scroll', this.checkScroll.bind(this));
  }

  checkScroll() {
    if (window.scrollY === 0) {
      this.header.classList.remove(this.scrolledClass);
    } else {
      this.header.classList.add(this.scrolledClass);
    }
  }
}

export default HeaderHandler;
