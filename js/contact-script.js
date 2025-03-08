// JavaScript for Contact Page functionality
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    const responseMessage = document.getElementById("form-response");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            
            if (name === "" || email === "" || message === "") {
                responseMessage.innerHTML = "<p style='color: red;'>All fields are required.</p>";
                return;
            }
            
            if (!validateEmail(email)) {
                responseMessage.innerHTML = "<p style='color: red;'>Please enter a valid email address.</p>";
                return;
            }
            
            // Simulate a successful form submission
            responseMessage.innerHTML = "<p style='color: green;'>Thank you! Your message has been sent successfully.</p>";
            contactForm.reset();
        });
    }
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
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
});
