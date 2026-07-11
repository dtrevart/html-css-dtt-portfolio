const headerImages = [
    "../../../assets/LEGO/General/DeepSeaCreatures/Header.jpg",
    "../../../assets/LEGO/General/CurlworksFish/Header.jpg",
    "../../../assets/LEGO/General/DeepSeaDiorama/Header.jpg",
    "../../../assets/LEGO/General/BillsArt/Header.png",
    "../../../assets/LEGO/General/Chicken/Header.jpg"
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