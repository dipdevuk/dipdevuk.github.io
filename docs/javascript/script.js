let currentIndex = 0;
const slides = document.querySelectorAll('.hero-link');
const totalSlides = slides.length;
const slider = document.querySelector('.hero-slider');

let slideInterval;

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`; // Adjust position
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop to next slide
    showSlide(currentIndex);
    resetSlideInterval();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop to previous slide
    showSlide(currentIndex);
    resetSlideInterval();
}

function resetSlideInterval() {
    clearInterval(slideInterval); // Clear existing interval
    slideInterval = setInterval(nextSlide, 5000); // Reset interval
}

// Start the slide interval
slideInterval = setInterval(nextSlide, 5000);

// Initialize the first slide
showSlide(currentIndex);
