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

const LEGOHeader_Images = [
    './assets/HeaderSlideshows/LEGO/LegoHeader1.jpg',
    './assets/HeaderSlideshows/LEGO/LegoHeader2.jpg',
    './assets/HeaderSlideshows/LEGO/LegoHeader3.jpg',
    './assets/HeaderSlideshows/LEGO/LegoHeader4.jpg',
    './assets/HeaderSlideshows/LEGO/LegoHeader5.jpg',
    './assets/HeaderSlideshows/LEGO/LegoHeader6.jpg',
];

let currentImage_LEGOHeader = 0;
function changeBackground_LEGO() {
  const LEGO_Element = document.getElementById('legopage')
  if (LEGO_Element) {
    LEGO_Element.style.backgroundImage = `url(${LEGOHeader_Images[currentImage_LEGOHeader]})`;
    currentImage_LEGOHeader = (currentImage_LEGOHeader + 1) % LEGOHeader_Images.length;
  }
}
setInterval(changeBackground_LEGO, 6000);
changeBackground_LEGO();



const ClientHeader_Images = [
  './assets/HeaderSlideshows/Clients/ClientsHeader1.jpg',
  './assets/HeaderSlideshows/Clients/ClientsHeader2.jpg',
  './assets/HeaderSlideshows/Clients/ClientsHeader3.jpg',
  './assets/HeaderSlideshows/Clients/ClientsHeader4.jpg',
  './assets/HeaderSlideshows/Clients/ClientsHeader5.jpg',
  './assets/HeaderSlideshows/Clients/ClientsHeader6.jpg',
];

let currentImage_ClientHeader = 0;
function changeBackground_Client() {
  const Client_Element = document.getElementById('clientworkpage')
  if (Client_Element) {
    Client_Element.style.backgroundImage = `url(${ClientHeader_Images[currentImage_ClientHeader]})`;
    currentImage_ClientHeader = (currentImage_ClientHeader + 1) % ClientHeader_Images.length;
  }
}
setInterval(changeBackground_Client, 6000);
changeBackground_Client();
