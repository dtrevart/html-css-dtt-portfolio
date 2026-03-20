document.addEventListener("DOMContentLoaded", () => {

  const items = document.querySelectorAll('.design-item');
  const modal = document.getElementById('designModal');

  const title = document.getElementById('modalTitle');
  const desc = document.getElementById('modalDesc');
  const products = document.getElementById('modalProducts');
  const link = document.getElementById('modalLink');
  const projectLink = document.getElementById('modalProjectLink');

  const closeBtn = document.querySelector('.modal-close');

  if (!items.length || !modal || !closeBtn) {
    console.log("Modal setup failed");
    return;
  }

  items.forEach(item => {
    item.addEventListener('click', () => {

      // Fill modal content
      title.textContent = item.dataset.title;
      desc.textContent = item.dataset.desc;
      products.textContent = item.dataset.products;
      link.href = item.dataset.link;

      // Optional project link
      if (item.dataset.projectLink) {
        projectLink.style.display = "inline-block";
        projectLink.href = item.dataset.projectLink;
      } else {
        projectLink.style.display = "none";
      }

      // =========================
      // LOAD IMAGES INTO SLIDESHOW
      // =========================
      const track = modal.querySelector('.modal-track');
      track.innerHTML = "";

      const imageList = item.dataset.images
        ? item.dataset.images.split(",")
        : [item.querySelector("img").src];

      imageList.forEach(src => {
        const img = document.createElement("img");
        img.src = src.trim();
        track.appendChild(img);
      });

      // 🔥 INIT SLIDESHOW AFTER IMAGES EXIST
      initModalCarousel();

      // Show modal
      modal.classList.add('show');
      document.body.classList.add('modal-open');
    });
  });

  function closeModal() {
    modal.classList.remove('show');
    document.body.classList.remove('modal-open');

    // Stop slideshow autoplay
    if (window.modalCarouselCleanup) {
      window.modalCarouselCleanup();
    }
  }

  closeBtn.addEventListener('click', closeModal);

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

});