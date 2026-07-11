const headerImages = [
    "../../assets/Projects/Personal/RESTSTOP_Rebrand_Project/Header.jpg",
    "../../assets/Projects/Personal/SecondHelpings.jpg",
    "../../assets/Projects/Personal/BerryBlue/Header.jpg",
    "../../assets/Projects/Personal/Store/Header.jpg",
    "../../assets/Projects/Personal/Cookbook.jpg",
    "../../assets/Projects/Personal/VTSUnity/Header.jpg",
    "../../assets/Projects/Personal/DBD_Posters/Header.jpg",
    "../../assets/Projects/Personal/ColorTheoryPosters/Header.jpg",
    "../../assets/Projects/Personal/MedSlidePosters/Header.jpg"
];


const track = document.querySelector(".header-track");


// Add images twice for seamless looping
const images = [...headerImages, ...headerImages];


images.forEach(src => {

    const img = document.createElement("img");

    img.src = src;
    img.alt = "";

    track.appendChild(img);

});