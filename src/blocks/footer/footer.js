import ready from "../../js/utils/documentReady.js";

ready(function () {
  const pageFooter = document.querySelector(".footer");

  if (pageFooter) {
    const yearContainer = pageFooter.querySelector(".footer__copy span");
    yearContainer.innerText = new Date().getFullYear();
  }
});
