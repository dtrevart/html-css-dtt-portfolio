document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".Page_Content");
  if (!page) return;

  // Fade in on load
  page.classList.add("page-visible");

  // Intercept all internal link clicks
  document.querySelectorAll("a[href]").forEach(link => {
    const url = link.getAttribute("href");

  
    // Ignore external links & anchors
    if (url.startsWith("http") 
    || 
      url.startsWith("#")
    ||
    link.target === "_blank" 
    ||
    link.hasAttribute("download")
    ) return

    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Trigger leave transition
      page.classList.remove("page-visible");
      page.classList.add("page-leave");

      // Wait for transition, then navigate
      setTimeout(() => {
        window.location.href = url;
      }, 500); // match transition duration
    });
  });
});

window.addEventListener("pageshow", () => {
  const page = document.querySelector(".Page_Content");
  if (!page) return;

  // Cancel any pending navigation
  if (transitionTimeout) {
    clearTimeout(transitionTimeout);
    transitionTimeout = null;
  }

  // Reset visibility
  page.classList.remove("page-leave");
  page.classList.add("page-visible");
});