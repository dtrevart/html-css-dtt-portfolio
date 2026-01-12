document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".Page_Content");
  if (!page) return;

  // Add entry animation on first load
  page.classList.add("page-visible");
});

window.addEventListener("pageshow", () => {
  const page = document.querySelector(".Page_Content");
  if (!page) return;

  // Re-apply entry animation on back/forward restore
  page.classList.add("page-visible");
});