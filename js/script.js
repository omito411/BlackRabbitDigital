// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navUL = document.querySelector(".nav-ul");

if (hamburger && close && navUL) {
    hamburger.addEventListener("click", () => {
        navUL.classList.toggle("show");
        hamburger.classList.toggle("hide");
    });

    close.addEventListener("click", () => {
        navUL.classList.toggle("show");
        hamburger.classList.toggle("hide");
    });
}

// Countdown Timer
const countTo = "31 May 2025";
const countdownElement = document.getElementById("countdown");

if (countdownElement) {
    const c = setInterval(() => {
        const endDate = new Date(countTo);
        const currentDate = new Date();
        const totalSeconds = (endDate - currentDate) / 1000;

        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const secs = Math.floor(totalSeconds) % 60;

        countdownElement.textContent = days + ' Days ' + format(hours) + ' Hrs : ' + format(mins) + ' Min : ' + format(secs) + ' s';

        if (totalSeconds < 0) {
            clearInterval(c);
            countdownElement.textContent = "We're Live!";
        }
    }, 1000);
}

function format(t) {
    return t < 10 ? '0' + t : t;
}

// Carousel
const track = document.querySelector(".carousel-track");
const slides = Array.from(document.querySelectorAll(".thumbnail"));
const leftArrow = document.getElementById("slide-left");
const rightArrow = document.getElementById("slide-right");
const dotsContainer = document.getElementById("carousel-dots");

if (track && slides.length && leftArrow && rightArrow && dotsContainer) {
    let currentIndex = 0;
    let autoPlayInterval;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
        dot.addEventListener("click", () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    // Update slide visibility (fade transition)
    function updateCarousel() {
        slides.forEach((slide, index) => {
            slide.classList.toggle("active", index === currentIndex);
        });
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentIndex);
        });
    }

    // Go to specific slide
    function goToSlide(index) {
        currentIndex = (index + slides.length) % slides.length;
        updateCarousel();
    }

    // Next slide
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    // Previous slide
    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    // Auto-play
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // Event listeners
    leftArrow.addEventListener("click", () => {
        stopAutoPlay();
        prevSlide();
        startAutoPlay();
    });

    rightArrow.addEventListener("click", () => {
        stopAutoPlay();
        nextSlide();
        startAutoPlay();
    });

    // Pause on hover
    track.parentElement.addEventListener("mouseenter", stopAutoPlay);
    track.parentElement.addEventListener("mouseleave", startAutoPlay);

    // Start auto-play
    startAutoPlay();
}

// Search Modal
const modal = document.getElementById("modal");
const searchBtn = document.querySelector(".search");
const closeModalBtn = document.querySelector(".close-modal");
const searchForm = document.getElementById("search-form");

if (modal && searchBtn && closeModalBtn && searchForm) {
    searchBtn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "block";
    });

    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close on outside click
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Placeholder form handling
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const query = document.getElementById("search-input").value.trim();
        if (query) {
            alert("Searching for: " + query);
        }
    });
}

// AOS Initialization
AOS.init({
    duration: 1000,
});
