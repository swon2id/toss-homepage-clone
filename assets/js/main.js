import HeaderHandler from '/assets/js/HeaderHandler.js';
import MainBannerHandler from '/assets/js/MainBannerHandler.js';

document.addEventListener('DOMContentLoaded', function () {
  new HeaderHandler();
  new MainBannerHandler(
    '.banner-skip-btn',
    '.main-banner__desc',
    '.banner-skip-btn g'
  );
});
