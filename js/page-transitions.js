let isNavigating = false;

function getPage() {
  return document.querySelector(".Page_Content");
}

// Entry animation: runs on page load or back/forward
function showPage() {
  const page = getPage();
  if (!page) return;

  page.classList.remove("page-leave");
  page.classList.add("page-visible");
}

// Exit animation: runs only when clicking a forward link
function leavePage(callback) {
  const page = getPage();
  if (!page) {
    callback();
    return;
  }

  page.classList.remove("page-visible");
  page.classList.add("page-leave");

  // Wait for CSS transition to finish
  const onEnd = (e) => {
    if (e.target !== page) return;
    page.removeEventListener("transitionend", onEnd);
    callback();
  };

  page.addEventListener("transitionend", onEnd, { once: true });
}

// Attach click handlers to internal links
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

/* INITIAL LOAD */
document.addEventListener("DOMContentLoaded", () => {
  isNavigating = false;
  showPage();
  setupLinks();
});

/* BACK/FORWARD NAVIGATION */
window.addEventListener("pageshow", () => {
  // Reset state for restored pages
  isNavigating = false;
  showPage();
});