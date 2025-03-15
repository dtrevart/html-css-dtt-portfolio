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