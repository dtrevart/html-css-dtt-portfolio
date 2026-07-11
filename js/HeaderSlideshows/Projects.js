const headerImages = [
    "../../assets/Projects/Personal/RESTSTOP_Rebrand_Project/Header.jpg",
    "../../assets/Projects/Assignments/Apple_StillLife/Header.jpg",
    "../../assets/Projects/Personal/BerryBlue/Header.jpg",
    "../../assets/Projects/Assignments/general/1Fish/Header.jpg",
    "../../assets/Projects/Assignments/CatMagazine_Layout/Header.jpg",
    "../../assets/Projects/Personal/SecondHelpings/Header.png"
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