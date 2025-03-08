// JavaScript for Price Checker, Search Modal, Contact Form, and New Toggle functionality
document.addEventListener("DOMContentLoaded", function() {
    // Price Checker Functionality
    const priceForm = document.getElementById("price-form");
    if (priceForm) {
        priceForm.addEventListener("submit", function(event) {
            event.preventDefault();
            let totalPrice = 100;
            const numPages = document.getElementById("num-web-pages").value || 0;
            const seo = document.getElementById("seo").checked ? 50 : 0;
            const design = document.getElementById("graphic-design").checked ? 75 : 0;
            const ads = document.getElementById("google-ads").checked ? 40 : 0;
            const socialMedia = document.getElementById("social-media-posts").checked ? 30 : 0;
            const ecommerce = document.getElementById("ecommerce").checked ? 150 : 0;
            const maintenance = document.getElementById("support").checked ? 100 : 0;
            
            totalPrice += (numPages * 30) + seo + design + ads + socialMedia + ecommerce + maintenance;
            document.getElementById("message").innerHTML = `<h3>Estimated Cost: $${totalPrice}</h3>`;
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

    // Contact Form Handling
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            document.getElementById("form-response").innerHTML = "<p>Thank you for reaching out! We'll get back to you soon.</p>";
            contactForm.reset();
        });
    }

    // New Toggle Functionality
    const toggleButton = document.getElementById("toggle-button");
    const toggleContent = document.getElementById("toggle-content");
    if (toggleButton && toggleContent) {
        toggleButton.addEventListener("click", () => {
            toggleContent.classList.toggle("active");
        });
    }
});
