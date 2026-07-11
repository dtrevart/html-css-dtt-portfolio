const headerImages = [
    "../../../assets/Videography/ShortFilms/WhereWeAre/WhereWeAreHeader.gif",
    "../../../assets/Videography/ShortFilms/SelfReflection/Thumbnail.gif",
    "../../../assets/Videography/ShortFilms/DayIn60s/Thumbnail.gif",
    
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