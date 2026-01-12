document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".Page_Content");
  if (!page) return;

  // Initial fade/slide-in on load
  requestAnimationFrame(() => {
    page.classList.add("page-visible");
  });
});

window.addEventListener("pageshow", (event) => {
  const page = document.querySelector(".Page_Content");
  if (!page) return;

  // Make sure the page is visible
  page.classList.add("page-visible");

  // Reset scroll position on back/forward
  window.scrollTo(0, 0);

  // Refresh ScrollTrigger for GSAP animations
  if (typeof ScrollTrigger !== "undefined") {
    ScrollTrigger.refresh(true);
  }
});