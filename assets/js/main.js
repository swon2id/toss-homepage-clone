import HeaderHandler from "assets/js/HeaderHandler.js";
import MainBannerHandler from "assets/js/MainBannerHandler.js";
import CurtainAnimationHandler from "assets/js/CurtainAnimationHandler.js";

document.addEventListener("DOMContentLoaded", function () {
  new HeaderHandler();
  new MainBannerHandler(
    ".banner-skip-btn",
    ".main-banner__desc",
    ".banner-skip-btn g"
  );
  new CurtainAnimationHandler("main > section:nth-child(7)");
});
