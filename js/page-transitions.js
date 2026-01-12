let transitionTimeout = null;

function showPage() {
  const page = document.querySelector(".Page_Content");
  if (!page) return;

  page.classList.remove("page-leave");
  page.classList.add("page-visible");
}

function hidePage() {
  const page = document.querySelector(".Page_Content");
  if (!page) return;

  page.classList.remove("page-visible");
  page.classList.add("page-leave");
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
      e.preventDefault();

      hidePage();

      transitionTimeout = setTimeout(() => {
        window.location.assign(url);
      }, 500);
    });
  });
}

/* Initial load */
document.addEventListener("DOMContentLoaded", () => {
  showPage();
  setupLinks();
});

/* Back / forward navigation */
window.addEventListener("pageshow", () => {
  if (transitionTimeout) {
    clearTimeout(transitionTimeout);
    transitionTimeout = null;
  }

  showPage();
});

/* Safety: cancel timers when leaving */
window.addEventListener("pagehide", () => {
  if (transitionTimeout) {
    clearTimeout(transitionTimeout);
    transitionTimeout = null;
  }
});