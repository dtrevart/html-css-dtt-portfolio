const headerImages = [
    "../../assets/LEGO/Minecraft/Minecraft_BeeHouse/Header.jpg",
    "../../assets/LEGO/Minecraft/Minecraft_DesertWell/Header.jpg",
    "../../assets/LEGO/Minecraft/Minecraft_TheBridge/Header.jpg",
    "../../assets/LEGO/Minecraft/Minecraft_HouseDiorama/Header.jpg",
    "../../assets/LEGO/Minecraft/Minecraft_SmallDisplays/Header.png"
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