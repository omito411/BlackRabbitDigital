// JavaScript for Portfolio Page functionality
document.addEventListener("DOMContentLoaded", function() {
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

    // Smooth Scroll for Portfolio Links
    const portfolioLinks = document.querySelectorAll(".nav-link");
    portfolioLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                document.getElementById(targetId).scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

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
