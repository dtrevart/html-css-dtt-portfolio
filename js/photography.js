document.addEventListener("DOMContentLoaded", () => {

    const photoModal = document.getElementById("photoModal");
    const photoModalContainer = document.querySelector(".photo-modal-container");
    const photoModalClose = document.getElementById("photoModalClose");

    const photoModalTitle = document.getElementById("photoModalTitle");
    const photoModalDate = document.getElementById("photoModalDate");
    const photoModalCount = document.getElementById("photoModalCount");
    const photoModalGrid = document.getElementById("photoModalGrid");

    const photoDrops = document.querySelectorAll(".photo-drop");


    /* ==============================
       PHOTO DROP DATA
       ============================== */

    const photoData = {
        "Arcade": {
            title: "// Arcade //",
            date: "August 2025",
            photos: [
                "../../assets/Photography/Arcade/Arcade1.png",
                "../../assets/Photography/Arcade/Arcade2.png",
                "../../assets/Photography/Arcade/Arcade3.png",
                "../../assets/Photography/Arcade/Arcade4.png"
            ]
        },

        "08_11_26": {
            title: "// 08_11_26 //",
            date: "August 2026",
            photos: [
                "../../assets/Photography/08_11_26/Wall.png",
                "../../assets/Photography/08_11_26/Sky.png",
                "../../assets/Photography/08_11_26/Building.png",
                "../../assets/Photography/08_11_26/CarRadio.png"
            ]
        },

        "06_18_26": {
            title: "// 06_18_26 //",
            date: "June 2026",
            photos: [
                "../../assets/Photography/06_18_26/1.png",
                "../../assets/Photography/06_18_26/2.png",
                "../../assets/Photography/06_18_26/3.png"
            ]
        },

        "05_26_26": {
            title: "// 05.26.26 //",
            date: "May 2026",
            photos: [
                "../../assets/Photography/05_26_26/1.png",
                "../../assets/Photography/05_26_26/2.png",
                "../../assets/Photography/05_26_26/3.png",
                "../../assets/Photography/05_26_26/4.png",
                "../../assets/Photography/05_26_26/5.png",
                "../../assets/Photography/05_26_26/6.png",
                "../../assets/Photography/05_26_26/7.png"


            ]
        },

        "OBX_26": {
            title: "// OBX.26// ",
            date: "August 2026",
            photos: [
                "../../assets/Photography/OBX_26/Avery_BananaDog.png",
                "../../assets/Photography/OBX_26/Avery_BananaDog2.png",
                "../../assets/Photography/OBX_26/Avery_Book1.png",
                "../../assets/Photography/OBX_26/Avery_Book2.png",
                "../../assets/Photography/OBX_26/Avery_Vintage1.png",
                "../../assets/Photography/OBX_26/Avery_Vintage2.png",
                "../../assets/Photography/OBX_26/Avery_Vintage3.png",
                "../../assets/Photography/OBX_26/Avery_Vintage4.png",
                "../../assets/Photography/OBX_26/BalloonDog.png",
                "../../assets/Photography/OBX_26/BananaDog.png",
                "../../assets/Photography/OBX_26/BananaDog2.png",
                "../../assets/Photography/OBX_26/BananaDog3.png",
                "../../assets/Photography/OBX_26/BirdBridge.png",
                "../../assets/Photography/OBX_26/Bridge.png",
                "../../assets/Photography/OBX_26/Crab.png",
                "../../assets/Photography/OBX_26/Crab_Booze.png",
                "../../assets/Photography/OBX_26/Crab_SourPatch.png",
                "../../assets/Photography/OBX_26/Crane1.png",
                "../../assets/Photography/OBX_26/Crane2.png",
                "../../assets/Photography/OBX_26/Crane3.png",
                "../../assets/Photography/OBX_26/DuckBoardwalk.png",
                "../../assets/Photography/OBX_26/Enemies.png",
                "../../assets/Photography/OBX_26/FunBucket1.png",
                "../../assets/Photography/OBX_26/FunBucket3.png",
                "../../assets/Photography/OBX_26/HorseSign.png",
                "../../assets/Photography/OBX_26/Lego_Octo1.png",
                "../../assets/Photography/OBX_26/Lego_Octo2.png",
                "../../assets/Photography/OBX_26/LegoAlien1.png",
                "../../assets/Photography/OBX_26/LifeguardChair_1.png",
                "../../assets/Photography/OBX_26/Lighthouse.png",
                "../../assets/Photography/OBX_26/LittleGuys.png",
                "../../assets/Photography/OBX_26/Seagull.png",
                "../../assets/Photography/OBX_26/Shrimp.png",
                "../../assets/Photography/OBX_26/Sunset.png",
                "../../assets/Photography/OBX_26/Whalehead.png",
                "../../assets/Photography/OBX_26/Whalehead_Night.png",
                "../../assets/Photography/OBX_26/Whalehead_Water.png"
            ]
        }

    };


    /* ==============================
       OPEN MODAL
       ============================== */

    function openPhotoDrop(dropID) {

        const drop = photoData[dropID];

        if (!drop) {
            console.warn(`Photography drop "${dropID}" was not found.`);
            return;
        }

        // Update modal information
        photoModalTitle.textContent = drop.title;
        photoModalDate.textContent = drop.date;

        const photoCount = drop.photos.length;

        photoModalCount.textContent =
            `${photoCount} ${photoCount === 1 ? "photo" : "photos"}`;


        // Clear previous photos
        photoModalGrid.innerHTML = "";


        // Add photos
        drop.photos.forEach((photo, index) => {

            const wrapper = document.createElement("div");
            wrapper.className = "photo-modal-photo-wrapper";

            const image = document.createElement("img");

            image.className = "photo-modal-photo";
            image.src = photo;
            image.alt = `${drop.title} photograph ${index + 1}`;
            image.loading = "lazy";

            wrapper.appendChild(image);
            photoModalGrid.appendChild(wrapper);

        });


        // Reset modal scroll position
        photoModalContainer.scrollTop = 0;


        // Open modal
        photoModal.classList.add("show");
        photoModal.setAttribute("aria-hidden", "false");

        document.body.classList.add("photo-modal-open");

        // Prevent background from scrolling
        document.body.style.overflow = "hidden";

        // Focus close button
        photoModalClose.focus();
    }


    /* ==============================
       CLOSE MODAL
       ============================== */

    function closePhotoModal() {

        photoModal.classList.remove("show");
        photoModal.setAttribute("aria-hidden", "true");

        document.body.classList.remove("photo-modal-open");

        document.body.style.overflow = "";

    }


    /* ==============================
       DROP CLICK
       ============================== */

    photoDrops.forEach(drop => {

        drop.addEventListener("click", () => {

            const dropID = drop.dataset.drop;

            openPhotoDrop(dropID);

        });


        // Keyboard accessibility
        drop.addEventListener("keydown", event => {

            if (event.key === "Enter" || event.key === " ") {

                event.preventDefault();

                const dropID = drop.dataset.drop;

                openPhotoDrop(dropID);

            }

        });

    });


    /* ==============================
       CLOSE BUTTON
       ============================== */

    photoModalClose.addEventListener("click", closePhotoModal);


    /* ==============================
       CLICK BACKDROP TO CLOSE
       ============================== */

    photoModal.addEventListener("click", event => {

        if (event.target === photoModal ||
            event.target.classList.contains("photo-modal-backdrop")) {

            closePhotoModal();

        }

    });


    /* ==============================
       ESCAPE KEY
       ============================== */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape" &&
            photoModal.classList.contains("show")) {

            closePhotoModal();

        }

    });

});