document.addEventListener("DOMContentLoaded", function () {
  const topBtn = document.querySelector(".back-to-top");

  function toggleBackToTop() {
    if (window.scrollY > 400) {
      topBtn.classList.add("is-visible");
    } else {
      topBtn.classList.remove("is-visible");
    }
  }

  window.addEventListener("scroll", toggleBackToTop);
  toggleBackToTop();

  topBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
