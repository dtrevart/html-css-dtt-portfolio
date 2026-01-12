document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".Page_Content");
  if (!page) return;

  // Entry animation on load
  requestAnimationFrame(() => {
    page.classList.add("page-visible");
  });

  // Exit animation for internal links
  document.querySelectorAll("a[href]").forEach(link => {
    const url = link.getAttribute("href");

  // Only internal links, ignore anchors / new tabs / external / downloads
  if (
    !url || 
    url.startsWith("#") || 
    link.target === "_blank" || 
    link.hasAttribute("download") ||
    (url.startsWith("http") && link.hostname !== window.location.hostname)
  ) return;

    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Trigger exit animation
      page.classList.remove("page-visible");
      page.classList.add("page-leave");

      // Wait for transition duration, then navigate
      setTimeout(() => {
        window.location.href = url;
      }, 400); // match your CSS transition
    });
  });
});

window.addEventListener("pageshow", () => {
  const page = document.querySelector(".Page_Content");
  if (!page) return;

  // Make sure page is visible after back/forward
  page.classList.remove("page-leave"); // important!
  page.classList.add("page-visible");

  // Reset scroll
  window.scrollTo(0, 0);

  // Refresh ScrollTrigger for GSAP
  if (typeof ScrollTrigger !== "undefined") {
    ScrollTrigger.refresh(true);
  }
});