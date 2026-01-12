let transitionTimeout = null;
let isNavigating = false;

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
      // 🔒 Prevent double or phantom navigation
      if (isNavigating) return;

      e.preventDefault();
      isNavigating = true;

      hidePage();

      transitionTimeout = setTimeout(() => {
        window.location.assign(url);
      }, 400); // match CSS exactly
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
  // Cancel any pending navigation
  if (transitionTimeout) {
    clearTimeout(transitionTimeout);
    transitionTimeout = null;
  }

  isNavigating = false;
  showPage();
});

/* Safety net */
window.addEventListener("pagehide", () => {
  if (transitionTimeout) {
    clearTimeout(transitionTimeout);
    transitionTimeout = null;
  }

  isNavigating = false;
});