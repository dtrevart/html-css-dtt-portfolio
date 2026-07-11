const headerImages = [
    "../../assets/Projects/Assignments/1Fish/Header.jpg",
    "../../assets/Projects/Assignments/Apple_StillLife/Header.jpg",
    "../../assets/Projects/Assignments/CatMagazine_Layout/Header.jpg",
    "../../assets/Projects/Assignments/Store/Header.jpg",
    "../../assets/Projects/Assignments/Cuppys/Header.jpg",
    "../../assets/Projects/Assignments/Calender/Header.jpg",
    "../../assets/Projects/Assignments/Munch_Brochure/Header.jpg",
    "../../assets/Projects/Assignments/Planty/Header.jpg",
    "../../assets/Projects/Assignments/Stax/Header.jpg",
    "../../assets/Projects/Assignments/DoggieDayzzz/Header.jpg",
    "../../assets/Projects/Assignments/HolidayCards/Header.jpg",
    "../../assets/Projects/Assignments/OmoriCards/Header.jpg",
    "../../assets/Projects/Assignments/CocoCritters/Header.jpg"
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