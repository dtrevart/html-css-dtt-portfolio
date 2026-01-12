document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".Page_Content");
  if (!page) return;

  // Entry animation
  page.classList.add("page-visible");
});

window.addEventListener("pageshow", () => {
  const page = document.querySelector(".Page_Content");
  if (!page) return;

  // Reapply entry animation when using back/forward
  page.classList.add("page-visible");
});