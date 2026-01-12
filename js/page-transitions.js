document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".Page_Content");
  if (!page) return;

  // --------------------
  // ENTRY ANIMATION ON LOAD
  // --------------------
  // Ensure page starts from initial state
  page.style.opacity = 0;
  page.style.transform = "translateX(50px)";
  page.style.transition = "opacity 0.4s ease, transform 0.4s ease";

  // Trigger entry animation
  requestAnimationFrame(() => {
    page.style.opacity = 1;
    page.style.transform = "translateX(0)";
  });

  // --------------------
  // EXIT ANIMATION ON INTERNAL LINKS
  // --------------------
  document.querySelectorAll("a[href]").forEach(link => {
    const url = link.getAttribute("href");

    // Only internal links; ignore anchors, external links, new tabs, downloads
    if (
      !url ||
      url.startsWith("#") ||
      link.target === "_blank" ||
      link.hasAttribute("download") ||
      (url.startsWith("http") && link.hostname !== window.location.hostname)
    ) return;

    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Apply exit animation
      page.style.opacity = 0;
      page.style.transform = "translateX(-50px)";

      // Wait for CSS transition, then navigate
      setTimeout(() => {
        window.location.href = url;
      }, 400); // match CSS transition duration
    });
  });
});

// --------------------
// SAFE ENTRY ON BACK/FORWARD
// --------------------
window.addEventListener("pageshow", (event) => {
  const page = document.querySelector(".Page_Content");
  if (!page) return;

  // Reset any exit state
  page.style.transition = "none";
  page.style.opacity = 0;
  page.style.transform = "translateX(50px)";

  // Small delay to allow browser to apply styles
  requestAnimationFrame(() => {
    page.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    page.style.opacity = 1;
    page.style.transform = "translateX(0)";
  });

  // Reset scroll
  window.scrollTo(0, 0);

  // Refresh ScrollTrigger if GSAP is loaded
  if (typeof ScrollTrigger !== "undefined") {
    ScrollTrigger.refresh(true);
  }
});