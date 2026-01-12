let isNavigating = false;

function getPage() {
  return document.querySelector(".Page_Content");
}

function showPage() {
  const page = getPage();
  if (!page) return;

  page.classList.remove("page-leave");
  page.classList.add("page-visible");
}

function leavePage(callback) {
  const page = getPage();
  if (!page) {
    callback();
    return;
  }

  page.classList.remove("page-visible");
  page.classList.add("page-leave");

  const onEnd = (e) => {
    if (e.target !== page) return;

    page.removeEventListener("transitionend", onEnd);
    callback();
  };

  page.addEventListener("transitionend", onEnd, { once: true });
}

function setupLinks() {
  document.querySelectorAll("a[href]").forEach(link => {
    const url = link.getAttribute("href");

    if (
      url.startsWith("http") ||
      url.startsWith("#") ||
      link.target === "_blank" ||
      link.hasAttribute("download")
    ) return;

    link.addEventListener("click", (e) => {
      if (isNavigating) return;

      e.preventDefault();
      isNavigating = true;

      leavePage(() => {
        window.location.assign(url);
      });
    });
  });
}

/* Initial load */
document.addEventListener("DOMContentLoaded", () => {
  isNavigating = false;
  showPage();
  setupLinks();
});

/* Back / forward navigation */
window.addEventListener("pageshow", () => {
  isNavigating = false;
  showPage();
});