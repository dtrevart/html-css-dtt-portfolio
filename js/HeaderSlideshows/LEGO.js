const headerImages = [
    "../../../assets/LEGO/General/DeepSeaCreatures/Header.jpg",
    "../../../assets/LEGO/Minecraft/Minecraft_DesertWell/Header.jpg",
    "../../../assets/LEGO/Brickheadz/Brickheadz_SableWard/Header.jpg",
    "../../../assets/LEGO/General/CurlworksFish/Header.jpg",
    "../../../assets/LEGO/Minecraft/Minecraft_TheBridge/Header.jpg",
    "../../../assets/LEGO/Brickheadz/Brickheadz_Moira/Header.jpg",
    "../../../assets/LEGO/General/DeepSeaDiorama/Header.jpg",
    "../../../assets/LEGO/Minecraft/HouseDiorama/Header.jpg",
    "../../../assets/LEGO/Brickheadz/Brickheadz_Sombra/Header.jpg"
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