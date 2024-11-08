import HeaderHandler from "./HeaderHandler.js";
import MainBannerHandler from "./MainBannerHandler.js";
import CurtainAnimationHandler from "./CurtainAnimationHandler.js";

document.addEventListener("DOMContentLoaded", function () {
  new HeaderHandler();
  new MainBannerHandler(
    ".banner-skip-btn",
    ".main-banner__desc",
    ".banner-skip-btn g"
  );
  new CurtainAnimationHandler("main > section:nth-child(7)");

  document.querySelectorAll("a").forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
    });
  });
});
