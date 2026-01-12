document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".Page_Content");
  if (!page) return;

  // --------------------
  // ENTRY ANIMATION ON FRESH LOAD
  // --------------------
  // Page starts hidden via CSS:
  // .Page_Content { opacity: 0; transform: translateX(50px); transition: opacity 0.4s, transform 0.4s; }

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

      // Exit animation: fade + slide left
      page.style.opacity = 0;
      page.style.transform = "translateX(-50px)";

      setTimeout(() => {
        window.location.href = url;
      }, 400); // match CSS duration
    });
  });
});

// --------------------
// SAFE ENTRY ON BACK/FORWARD (bfcache)
// --------------------
window.addEventListener("pageshow", (event) => {
  if (!event.persisted) return; // Only run on bfcache restore

  const page = document.querySelector(".Page_Content");
  if (!page) return;

  // Reset to initial state without transition
  page.style.transition = "none";
  page.style.opacity = 0;
  page.style.transform = "translateX(50px)";

  // Trigger entry animation on next frame
  requestAnimationFrame(() => {
    page.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    page.style.opacity = 1;
    page.style.transform = "translateX(0)";
  });

  // Reset scroll
  window.scrollTo(0, 0);

  // Refresh ScrollTrigger for GSAP animations
  if (typeof ScrollTrigger !== "undefined") {
    ScrollTrigger.refresh(true);
  }
});