document.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll(".design-item");
    const modal = document.getElementById("designModal");

    const title = document.getElementById("modalTitle");
    const products = document.getElementById("modalProducts");
    const modalEmbed = document.getElementById("modalEmbed");

    // Social links
    const ig = document.getElementById("modalInstagram");
    const yt = document.getElementById("modalYouTube");
    const tt = document.getElementById("modalTikTok");
    const li = document.getElementById("modalLinkedIn");

    const closeBtn = document.querySelector(".modal-close");

    if (!items.length || !modal || !closeBtn || !modalEmbed) {
        console.log("Video modal setup failed");
        return;
    }

    items.forEach(item => {

        item.addEventListener("click", () => {

            if (item.dataset.videoType !== "youtube") return;

            // =========================
            // TEXT CONTENT
            // =========================
            title.textContent = item.dataset.title || "";
            products.textContent = item.dataset.products || ""; // ✅ THIS FIXES YOUR DATE

            // =========================
            // YOUTUBE EMBED
            // =========================
            const videoId = item.dataset.videoId;

            modalEmbed.innerHTML = `
                <iframe
                    src="https://www.youtube.com/embed/${videoId}"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            `;

            // =========================
            // SOCIAL LINKS
            // =========================
            if (ig) {
                ig.href = item.dataset.instagram || "#";
                ig.style.display = item.dataset.instagram ? "inline-flex" : "none";
            }

            if (yt) {
                yt.href = item.dataset.youtube || `https://youtube.com/watch?v=${videoId}`;
                yt.style.display = item.dataset.youtube ? "inline-flex" : "none";
            }

            if (tt) {
                tt.href = item.dataset.tiktok || "#";
                tt.style.display = item.dataset.tiktok ? "inline-flex" : "none";
            }

            if (li) {
                li.href = item.dataset.linkedin || "#";
                li.style.display = item.dataset.linkedin ? "inline-flex" : "none";
            }

            // =========================
            // OPEN MODAL
            // =========================
            modal.classList.add("show");
            document.body.classList.add("modal-open");
        });

    });

    function closeModal() {
        modal.classList.remove("show");
        document.body.classList.remove("modal-open");

        // stop video playback
        modalEmbed.innerHTML = "";
    }

    closeBtn.addEventListener("click", closeModal);

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

});