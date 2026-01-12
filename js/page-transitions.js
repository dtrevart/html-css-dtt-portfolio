let isNavigating = false;

function getPage() {
  return document.querySelector(".Page_Content");
}

function showPage() {
  const page = getPage();
  if (!page) return;

  // Ensure entry animation
  page.classList.remove("page-leave");
  page.classList.add("page-visible");
}

function leavePage(callback) {
  const page = getPage();
  if (!page) {
    callback();
    return;
  }

  // Trigger exit animation
  page.classList.remove("page-visible");
  page.classList.add("page-leave");

  // Wait for transition to finish before navigating
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

    // Ignore external links, anchors, new tabs, downloads
    if (
      url.startsWith("http") ||
      url.startsWith("#") ||
      link.target === "_blank" ||
      link.hasAttribute("download")
    ) return;

    link.addEventListener("click", (e) => {
      if (isNavigating) return;

      e.preventDefault(); // stop default navigation
      isNavigating = true;

      leavePage(() => {
        // Navigate after exit animation
        window.location.assign(url);
      });
    });
  });
}

/* Initial load: entry animation */
document.addEventListener("DOMContentLoaded", () => {
  isNavigating = false;
  showPage();
  setupLinks();
});

/* Back/forward navigation: just entry animation */
window.addEventListener("pageshow", () => {
  isNavigating = false;
  showPage();
});