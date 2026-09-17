const headerImages = [
    "../../../assets/Photography/OBX_26/Sunset.png",
    "../../../assets/Photography/08_11_26/Wall.png",
    "../../../assets/Photography/OBX_26/Crab_Booze.png",
    "../../../assets/Photography/08_11_26/CarRadio.png"
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