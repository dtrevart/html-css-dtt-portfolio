
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

      // Wait for CSS transition, then navigate
      setTimeout(() => {
        window.location.href = url;
      }, 400); // match CSS transition duration
    });
  });
});

window.addEventListener("pageshow", (event) => {
  const page = document.querySelector(".Page_Content");
  if (!page) return;

  // Remove exit state just in case
  page.classList.remove("page-leave");

  // Subtle fade-in for back/forward navigation
  page.style.opacity = 0;
  page.style.transition = "opacity 0.4s ease";
  requestAnimationFrame(() => {
    page.style.opacity = 1;
  });

  // Reset scroll
  window.scrollTo(0, 0);

  // Refresh ScrollTrigger for GSAP animations
  if (typeof ScrollTrigger !== "undefined") {
    ScrollTrigger.refresh(true);
  }
});