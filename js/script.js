// Main JavaScript for Black Rabbit Digital Website
document.addEventListener("DOMContentLoaded", function() {
    AOS.init(); // Initialize animations
    
    // Mobile Menu Toggle
    const hamburger = document.getElementById("hamburger-menu");
    const navMenu = document.getElementById("nav-menu");
    const closeMenu = document.getElementById("close-menu");
    
    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }
    if (closeMenu) {
        closeMenu.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    }

    // Search Modal Functionality
    const searchIcon = document.getElementById("search-icon");
    const searchModal = document.getElementById("modal");
    const closeModal = document.querySelector(".close-modal");
    
    if (searchIcon && searchModal) {
        searchIcon.addEventListener("click", () => {
            searchModal.style.display = "block";
        });
    }
    if (closeModal) {
        closeModal.addEventListener("click", () => {
            searchModal.style.display = "none";
        });
    }

    // Portfolio Image Click Preview
    const portfolioItems = document.querySelectorAll(".portfolio-item img");
    
    portfolioItems.forEach(item => {
        item.addEventListener("click", () => {
            const previewModal = document.getElementById("preview-modal");
            const previewImage = document.getElementById("preview-image");
            
            if (previewModal && previewImage) {
                previewImage.src = item.src;
                previewModal.style.display = "block";
            }
        });
    });
    
    // Close Portfolio Image Preview
    const closePreview = document.getElementById("close-preview");
    if (closePreview) {
        closePreview.addEventListener("click", () => {
            document.getElementById("preview-modal").style.display = "none";
        });
    }

    // Contact Form Handling
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            document.getElementById("form-response").innerHTML = "<p>Thank you for reaching out! We'll get back to you soon.</p>";
            contactForm.reset();
        });
    }

    // Carousel Functionality
    const slideLeft = document.getElementById("slide-left");
    const slideRight = document.getElementById("slide-right");
    const carousel = document.getElementById("carousel");
    
    if (slideLeft && slideRight && carousel) {
        slideLeft.addEventListener("click", () => {
            carousel.scrollBy({ left: -300, behavior: "smooth" });
        });
        slideRight.addEventListener("click", () => {
            carousel.scrollBy({ left: 300, behavior: "smooth" });
        });
    }
});
