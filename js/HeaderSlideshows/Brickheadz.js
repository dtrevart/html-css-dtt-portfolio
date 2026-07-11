const headerImages = [
    "../../assets/LEGO/Brickheadz/Brickheadz_Astarion/Header.jpg",
    "../../assets/LEGO/Brickheadz/Brickheadz_Moira/Header.jpg",
    "../../assets/LEGO/Brickheadz/Brickheadz_SableWard/Header.jpg",
    "../../assets/LEGO/Brickheadz/Brickheadz_Sombra/Header.jpg"
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