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