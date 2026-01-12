/* ============================
   Hamburger Menu
============================ */
const hamburgerIcon = document.querySelector('.hamburger-icon');
const hamburgerMenuOverlay = document.querySelector('.hamburger-menu-overlay');
const closeButton = document.querySelector('.close-btn');

function toggleMenu() {
    const overlay = document.querySelector(".hamburger-menu-overlay");
    const icon = document.querySelector(".hamburger-icon");
    overlay.classList.toggle("active");
    icon.classList.toggle("active");
}

closeButton.addEventListener('click', function() {
    hamburgerMenuOverlay.classList.remove('active');
});

/* ============================
   Image Overlay
============================ */
function openImage(img) {
    const overlay = document.getElementById("imageOverlay");
    const fullImage = document.getElementById("fullImage");
    fullImage.src = img.src;
    overlay.classList.add("active");
}

function closeImage() {
    document.getElementById("imageOverlay").classList.remove("active");
}

/* ============================
   GSAP Animations
============================ */
gsap.registerPlugin(ScrollTrigger);

const scrollContainer = document.getElementById("scroll-container");

// Tell ScrollTrigger to use #scroll-container for scroll instead of window
ScrollTrigger.scrollerProxy(scrollContainer, {
    scrollTop(value) {
        if (arguments.length) scrollContainer.scrollTop = value;
        return scrollContainer.scrollTop;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: scrollContainer.style.transform ? "transform" : "fixed"
});

// Default all triggers to use our container
ScrollTrigger.defaults({ scroller: scrollContainer });

// Refresh after everything has loaded
window.addEventListener("load", () => {
    ScrollTrigger.refresh();
});

// Make #scroll-container the default scroller for all triggers
ScrollTrigger.defaults({ scroller: "#scroll-container" });

// Animated boxes fade in
gsap.set(".animated_box", { opacity: 0, y: 50, visibility: "visible" });
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
    stagger: { each: 0.2, from: "start" },
    delay: 0.5
});

// Hover animation for project boxes
document.querySelectorAll('.animated_box').forEach((box) => {
    const overlay = box.querySelector('.project-title');

    box.addEventListener('mouseenter', () => {
        gsap.to(box, { scale: 1.05, duration: 0.1, ease: "power2.out" });
        if (overlay) gsap.to(overlay, { opacity: 1, duration: 0.1, ease: "power2.out" });
    });

    box.addEventListener('mouseleave', () => {
        gsap.to(box, { scale: 1, duration: 0.1, ease: "power2.inOut" });
        if (overlay) gsap.to(overlay, { opacity: 0, duration: 0.1, ease: "power2.inOut" });
    });
});

/* ============================
   Timeline Toggle Buttons
============================ */
document.querySelectorAll('.timeline_toggle_btn').forEach(button => {
    button.addEventListener('click', () => {
        button.disabled = true;

        const details = button.closest('.content').querySelector('.timeline_item_details');
        const isOpen = details.classList.contains('open');

        if (isOpen) {
            details.style.maxHeight = details.scrollHeight + 'px';
            requestAnimationFrame(() => { details.style.maxHeight = '0'; });
            details.classList.remove('open');
            button.textContent = 'Show Details';
        } else {
            details.style.maxHeight = details.scrollHeight + 'px';
            details.classList.add('open');
            button.textContent = 'Hide Details';

            details.addEventListener('transitionend', () => {
                details.style.maxHeight = 'none';
                button.disabled = false;
            }, { once: true });

            return; // exit to avoid enabling button early
        }

        // Enable button after closing transition
        details.addEventListener('transitionend', () => { button.disabled = false; }, { once: true });
    });
});

/* ============================
   Header Video Autoplay
============================ */
const headerVideo = document.getElementById('Header_Video');
if (headerVideo) {
    headerVideo.play().catch(() => {
        console.log('Autoplay failed. Click to play.');
    });
}