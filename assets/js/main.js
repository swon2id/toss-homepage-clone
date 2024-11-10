import headerHandler from "./HeaderHandler.js";
import mainBannerHandler from "./MainBannerHandler.js";
import curtainAnimationHandler from "./CurtainAnimationHandler.js";
import contentRevealer from "./ContentRevealer.js";

document.addEventListener("DOMContentLoaded", function () {
  headerHandler.run();
  mainBannerHandler.run();
  curtainAnimationHandler.run();
  contentRevealer.run();

  document.querySelectorAll("a").forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
    });
  });
});
