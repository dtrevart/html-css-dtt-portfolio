const sectionBg = document.querySelector(".section-bg");

const cards = document.querySelectorAll(".feature-card");


cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        const image = card.querySelector(".card-image img");

        if (!image) return;


        const section = card.closest(".homepage-section");

        const rect = card.getBoundingClientRect();
        const sectionRect = section.getBoundingClientRect();


        const x = rect.left - sectionRect.left + rect.width / 2;
        const y = rect.top - sectionRect.top + rect.height / 2;


        sectionBg.style.left = `${x}px`;
        sectionBg.style.top = `${y}px`;


        sectionBg.style.setProperty(
            "--bg-image",
            `url("${image.src}")`
        );


        sectionBg.style.opacity = "1";

    });


    card.addEventListener("mouseleave", () => {

        sectionBg.style.opacity = "0";

    });

});