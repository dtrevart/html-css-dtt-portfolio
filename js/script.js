const hamburgerIcon = document.querySelector('.hamburger-icon');
const hamburgerMenuOverlay = document.querySelector('.hamburger-menu-overlay');
const closeButton = document.querySelector('.close-btn');

function toggleMenu() {
    const overlay = document.querySelector(".hamburger-menu-overlay");
    const icon = document.querySelector(".hamburger-icon");
    overlay.classList.toggle("active");
    icon.classList.toggle("active")
}

function openImage(img) {
    const overlay = document.getElementById("imageOverlay");
    const fullImage = document.getElementById("fullImage");
    fullImage.src = img.src;
    overlay.classList.add("active");
}

function closeImage() {
    document.getElementById("imageOverlay").classList.remove("active");
}

closeButton.addEventListener('click', function() {
    hamburgerMenuOverlay.classList.remove('active');
});


document.querySelectorAll('.animated_box').forEach((box) => {
  const overlay = box.querySelector('.project-title');

  box.addEventListener('mouseenter', () => {
      gsap.to(box, {
          scale: 1.05,
          duration: 0.1,
          ease: "power2.out"
      });

      if (overlay) {
          gsap.to(overlay, {
              opacity: 1,
              duration: 0.1,
              ease: "power2.out"
          });
      }
  });

  box.addEventListener('mouseleave', () => {
      gsap.to(box, {
          scale: 1,
          duration: 0.1,
          ease: "power2.inOut"
      });

      if (overlay) {
          gsap.to(overlay, {
              opacity: 0,
              duration: 0.1,
              ease: "power2.inOut"
          });
      }
  });
});

// Make sure ScrollTrigger is registered
gsap.registerPlugin(ScrollTrigger);

const scrollContainer = document.getElementById("scroll-container");

// Tell ScrollTrigger to use #scroll-container for scroll instead of window
ScrollTrigger.scrollerProxy(scrollContainer, {
  scrollTop(value) {
    if (arguments.length) {
      scrollContainer.scrollTop = value;
    }
    return scrollContainer.scrollTop;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  // Important: decide how pinning works
  pinType: scrollContainer.style.transform ? "transform" : "fixed"
});

// Default all triggers to use our container
ScrollTrigger.defaults({ scroller: scrollContainer });

// Refresh after everything has loaded
window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});

// Make #scroll-container the default scroller for all triggers
ScrollTrigger.defaults({
  scroller: "#scroll-container"
});

gsap.set(".animated_box", {
  opacity: 0,
  y: 50,
  visibility: "visible"
});

gsap.to(".animated_box", {
  scrollTrigger: {
    trigger: ".recent-project-parent",
    start: "top 100%",
    toggleActions: "play none none none",
    once: true,
  },
  opacity: 1,
  y: 0,
  duration: 0.5,
  ease: "power2.out",
  stagger: {
    each: 0.2,
    from: "start"
  },
  delay: 0.5 // Add a 1-second delay before the animation starts
});

document.getElementById('Header_Video').play().catch(function() {
    // If autoplay fails, log it or offer a fallback
    console.log('Autoplay failed. Click to play.');
});

document.querySelectorAll('.timeline_toggle_btn').forEach(button => {
  button.addEventListener('click', () => {
    // Disable button immediately
    button.disabled = true;

    const details = button.closest('.content').querySelector('.timeline_item_details');
    const isOpen = details.classList.contains('open');

    if (isOpen) {
      details.style.maxHeight = details.scrollHeight + 'px';
      requestAnimationFrame(() => {
        details.style.maxHeight = '0';
      });
      details.classList.remove('open');
      button.textContent = 'Show Details';
    } else {
      details.style.maxHeight = details.scrollHeight + 'px';
      details.classList.add('open');
      button.textContent = 'Hide Details';

      details.addEventListener('transitionend', () => {
        details.style.maxHeight = 'none'; // let it resize naturally
        button.disabled = false; // Re-enable button after animation
      }, { once: true });

      return; // exit here to avoid enabling button early
    }

    // For closing, enable button after transition too
    details.addEventListener('transitionend', () => {
      button.disabled = false;
    }, { once: true });
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const page = document.querySelector(".Page_Content");
    if (!page) return;

    // Fade/slide-in
    requestAnimationFrame(() => {
        page.classList.add("page-visible");
    });

    // Fade/slide-out for internal links
    document.querySelectorAll("a").forEach(link => {
        const url = link.getAttribute("href");

        if (url && !url.startsWith("#") && !link.target && link.hostname === window.location.hostname) {
            link.addEventListener("click", e => {
                e.preventDefault();

                page.classList.remove("page-visible");
                page.classList.add("page-leave");

                setTimeout(() => {
                    window.location.href = url;
                }, 400); // match CSS duration
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".Page_Content");
  if (!page) return;

  // Fade in on load
  page.classList.add("page-visible");

  // Intercept all internal link clicks
  document.querySelectorAll("a[href]").forEach(link => {
    const url = link.getAttribute("href");

    // Ignore external links & anchors
    if (url.startsWith("http") || url.startsWith("#")) return;

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

