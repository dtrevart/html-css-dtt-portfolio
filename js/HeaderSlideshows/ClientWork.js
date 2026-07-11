const headerImages = [
    "../../assets/Client/ContentLab/FCPR//Header.jpg",
    "../../assets/Client/Freelance/Hamlet/Header.jpg",
    "../../assets/Client/Freelance/GreatHarvestBread/Header.jpg",
    "../../assets/Client/Freelance/MozartPoster/Header.jpg",
    "../../assets/Client/ContentLab/StudentVoterDrive/Header.jpg",
    "../../assets/Client/Freelance/LivTrvEats/Header.jpg",
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