window.addEventListener("pageshow", () => {
  const page = document.querySelector(".Page_Content");
  if (!page) return;

  page.classList.remove("page-leave");
  page.classList.add("page-visible");
});