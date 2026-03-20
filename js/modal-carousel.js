function initModalCarousel() {

  const modal = document.getElementById('designModal');

  const track = modal.querySelector('.modal-track');
  const prevBtn = modal.querySelector('.modal-prev');
  const nextBtn = modal.querySelector('.modal-next');
  const bg = modal.querySelector('.modal-bg');

  let slides = track.querySelectorAll("img");
  if (!slides.length) return;

  let counter = 1;
  let interval;
  let isPlaying = true;

  // =========================
  // CLONE FIRST + LAST (INFINITE LOOP)
  // =========================
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  track.appendChild(firstClone);
  track.insertBefore(lastClone, slides[0]);

  slides = track.querySelectorAll("img");

  track.style.transition = "none";
  track.style.transform = `translateX(-${counter * 100}%)`;

  updateBackground();

  // =========================
  // FUNCTIONS
  // =========================
  function nextSlide() {
    if (counter >= slides.length - 1) return;

    counter++;
    track.style.transition = "transform 0.8s ease-in-out";
    track.style.transform = `translateX(-${counter * 100}%)`;
    updateBackground();
  }

  function prevSlide() {
    if (counter <= 0) return;

    counter--;
    track.style.transition = "transform 0.8s ease-in-out";
    track.style.transform = `translateX(-${counter * 100}%)`;
    updateBackground();
  }

  function updateBackground() {
    if (!bg || !slides[counter]) return;
    bg.style.backgroundImage = `url(${slides[counter].src})`;
  }

  // =========================
  // LOOP FIX (SEAMLESS)
  // =========================
  function handleTransitionEnd() {
    if (slides[counter] === firstClone) {
      track.style.transition = "none";
      counter = 1;
      track.style.transform = `translateX(-${counter * 100}%)`;
    }

    if (slides[counter] === lastClone) {
      track.style.transition = "none";
      counter = slides.length - 2;
      track.style.transform = `translateX(-${counter * 100}%)`;
    }
  }

  track.addEventListener("transitionend", handleTransitionEnd);

  // =========================
  // BUTTONS
  // =========================
  nextBtn?.addEventListener("click", () => {
    nextSlide();
    resetInterval();
  });

  prevBtn?.addEventListener("click", () => {
    prevSlide();
    resetInterval();
  });

  // =========================
  // AUTOPLAY (MATCHES MAIN)
  // =========================
  function startInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 10000);
  }

  function resetInterval() {
    if (isPlaying) {
      clearInterval(interval);
      interval = setInterval(nextSlide, 10000);
    }
  }

  if (slides.length > 2) {
    startInterval();
  }

  // =========================
  // CLEANUP (VERY IMPORTANT)
  // =========================
  window.modalCarouselCleanup = function () {
    clearInterval(interval);
    track.removeEventListener("transitionend", handleTransitionEnd);
  };
}