const headerImages = [
    "../../../assets/LEGO/Minecraft/Minecraft_ZombieDungeon/Header.gif",
    "../../../assets/LEGO/Minecraft/Minecraft_PaleGarden/Header.gif",
    
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