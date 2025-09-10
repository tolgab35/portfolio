---      
layout: null
---
document.addEventListener("DOMContentLoaded", function () {
  var V = "{{ site.github.build_revision | slice: 0, 8 }}";

  const topBtn = document.querySelector(".back-to-top");
  function toggleBackToTop() {
    if (window.scrollY > 400) topBtn.classList.add("is-visible");
    else topBtn.classList.remove("is-visible");
  }
  window.addEventListener("scroll", toggleBackToTop);
  toggleBackToTop();
  topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // Dahili linklere ?v= ekle
  const isSame = (h) => {
    try { return new URL(h, location.origin).origin === location.origin; }
    catch { return false; }
  };
  document.querySelectorAll("a[href]").forEach((a) => {
    const href = a.getAttribute("href");
    if (!href || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#")) return;
    if (!isSame(href)) return;
    const u = new URL(href, location.origin);
    if (!u.searchParams.has("v")) {
      u.searchParams.set("v", V);
      a.setAttribute("href", u.pathname + u.search + u.hash);
    }
  });

  document.querySelectorAll("img[src]").forEach((img) => {
    const src = img.getAttribute("src");
    if (!src) return;
    const u = new URL(src, location.origin);
    if (u.origin !== location.origin) return;
    if (!u.searchParams.has("v")) {
      u.searchParams.set("v", V);
      img.setAttribute("src", u.pathname + u.search + u.hash);
    }
  });
});
