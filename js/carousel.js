document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".carousel-container").forEach((carousel) => {

    const slides = carousel.querySelector(".carousel-slide");
    const images = carousel.querySelectorAll(".carousel-slide img");
    const bg = carousel.querySelector(".carousel-bg");
    const prevBtn = carousel.querySelector(".prev");
    const nextBtn = carousel.querySelector(".next");
    const toggleBtn = carousel.querySelector(".carousel-toggle");

    // Clone first and last slides
    const firstClone = images[0].cloneNode(true);
    const lastClone = images[images.length - 1].cloneNode(true);

    slides.appendChild(firstClone);
    slides.insertBefore(lastClone, images[0]);

    const allSlides = carousel.querySelectorAll(".carousel-slide img");
    let counter = 1;
    const size = 100;

    slides.style.transform = `translateX(${-size * counter}%)`;

    let isPlaying = true;
    let interval = setInterval(nextSlide, 10000);

    function updateBackground() {
      const current = allSlides[counter];
      bg.style.backgroundImage = `url(${current.src})`;
    }

    updateBackground();

    function nextSlide() {
      if (counter >= allSlides.length - 1) return;
      counter++;
      slides.style.transition = "transform 1s ease-in-out";
      slides.style.transform = `translateX(${-size * counter}%)`;
      updateBackground();
    }

    function prevSlide() {
      if (counter <= 0) return;
      counter--;
      slides.style.transition = "transform 1s ease-in-out";
      slides.style.transform = `translateX(${-size * counter}%)`;
      updateBackground();
    }

    slides.addEventListener("transitionend", () => {
      if (allSlides[counter].isSameNode(firstClone)) {
        slides.style.transition = "none";
        counter = 1;
        slides.style.transform = `translateX(${-size * counter}%)`;
        updateBackground();
      }

      if (allSlides[counter].isSameNode(lastClone)) {
        slides.style.transition = "none";
        counter = allSlides.length - 2;
        slides.style.transform = `translateX(${-size * counter}%)`;
        updateBackground();
      }
    });

    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetInterval();
    });

    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetInterval();
    });

    toggleBtn.addEventListener("click", () => {
      if (isPlaying) {
        clearInterval(interval);
        toggleBtn.innerHTML = "&#9658;";
      } else {
        interval = setInterval(nextSlide, 10000);
        toggleBtn.innerHTML = "&#10073;&#10073;";
      }
      isPlaying = !isPlaying;
    });

    function resetInterval() {
      if (isPlaying) {
        clearInterval(interval);
        interval = setInterval(nextSlide, 10000);
      }
    }

  });
});