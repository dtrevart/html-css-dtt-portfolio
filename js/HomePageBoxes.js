const imageSets = {

    projects: [

        "./assets/Projects/Personal/BerryBlue/Header.jpg",
        "./assets/Projects/Assignments/Munch_Brochure/Header.jpg",
        "./assets/Projects/Personal/RESTSTOP_Rebrand_Project/Header.jpg",
        "./assets/Projects/Store/Header.jpg",
        "./assets/Projects/Assignments/Planty/Header.jpg",
        "./assets/Projects/Personal/SecondHelpings/Header.png",
        "./assets/Projects/Assignments/1FIsh/Header.jpg",

    ],

    client: [

        "./assets/Client/Freelance/GreatHarvestBread/Header.png",
        "./assets/Client/ContentLab/FCPR/Header.jpg",
        "./assets/Client/Freelance/Hamlet/Header.jpg",
        "./assets/Client/ContentLab/StudentVoterDrive/Header.jpg",
        "./assets/Client/Freelance/MozartPoster/Header.jpg",
        "./assets/Client/ContentLab/ContentLab/Header.jpg",
    ],

    lego: [

        "./assets/LEGO/General/DeepSeaCreatures/Header.jpg",
        "./assets/LEGO/Minecraft/Minecraft_ZombieDungeon/Header.gif",
        "./assets/LEGO/Brickheadz/Brickheadz_Moira/Header.jpg",
        "./assets/LEGO/General/CurlworksFish/Header.jpg",
        "./assets/LEGO/Minecraft/Minecraft_DesertWell/Header.jpg",
        "./assets/LEGO/Brickheadz/Brickheadz_SableWard/Header.jpg"

    ],

    video: [

        "./assets/Videography/ShortFilms/WhereWeAre/WhereWeAreHeader.gif",
        "./assets/Videography/ShortFilms/SelfReflection/Thumbnail.gif",
        "./assets/Videography/ShortFilms/DayIn60s/Thumbnail.gif"

    ]

};


document.querySelectorAll(".homepage-card").forEach(card=>{

    const bg=card.querySelector(".card-bg");

    const key=[...card.classList].find(c=>imageSets[c]);

    if(!key) return;

    const images=imageSets[key];

    let index=0;

    bg.style.backgroundImage=`url("${images[0]}")`;

    setInterval(()=>{

        index=(index+1)%images.length;

        bg.style.opacity=0;

        setTimeout(()=>{

            bg.style.backgroundImage=`url("${images[index]}")`;

            bg.style.opacity=1;

        },400);

    },5000);

});