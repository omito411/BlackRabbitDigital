// JavaScript for About Page functionality
document.addEventListener("DOMContentLoaded", function() {
    // Team Member Details Toggle
    const teamMembers = document.querySelectorAll(".team-member");
    
    teamMembers.forEach(member => {
        member.addEventListener("click", () => {
            member.classList.toggle("active");
            const details = member.querySelector(".team-details");
            if (details) {
                details.classList.toggle("visible");
            }
        });
    });

    // Smooth Scroll for About Section Links
    const aboutLinks = document.querySelectorAll(".nav-link");
    aboutLinks.forEach(link => {
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
