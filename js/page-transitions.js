document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".Page_Content");
  if (!page) return;

  // Entry animation
  requestAnimationFrame(() => {
    page.classList.add("page-visible");
  });

  // Exit animation for internal links
  document.querySelectorAll("a[href]").forEach(link => {
    const url = link.getAttribute("href");
    if (
      !url || 
      url.startsWith("#") || 
      link.target === "_blank" || 
      link.hasAttribute("download") ||
      (url.startsWith("http") && link.hostname !== window.location.hostname)
    ) return;

    link.addEventListener("click", (e) => {
      e.preventDefault();
      page.classList.remove("page-visible");
      page.classList.add("page-leave");

      setTimeout(() => {
        window.location.href = url;
      }, 400);
    });
  });
});

// -------------------------------
// Back / Forward animation
// -------------------------------
window.addEventListener("popstate", () => {
  const page = document.querySelector(".Page_Content");
  if (!page) return;

  // Animate exit (simulate leaving the page)
  page.classList.remove("page-visible");
  page.classList.add("page-leave");

  // Wait for transition before resetting entry state
  setTimeout(() => {
    page.classList.remove("page-leave");
    page.classList.add("page-visible");
    window.scrollTo(0,0);

    if (typeof ScrollTrigger !== "undefined") {
      ScrollTrigger.refresh(true);
    }
  }, 400); // match your CSS transition
});