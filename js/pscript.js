// Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navUL = document.querySelector(".nav-ul");

hamburger.addEventListener("click", () => {
    navUL.classList.toggle("show");
    hamburger.classList.toggle("hide");
});

close.addEventListener("click", () => {
    navUL.classList.toggle("show");
    hamburger.classList.toggle("hide");
});

// Search Modal
const modal = document.getElementById("modal");
const btn = document.querySelector(".search");
const closeModal = document.querySelector(".close-modal");

btn.addEventListener("click", openPopup);
closeModal.addEventListener("click", closePopup);

function openPopup(e) {
    e.preventDefault();
    modal.style.display = "block";
}

function closePopup() {
    modal.style.display = "none";
}

// Form Submission
function formSubmission() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    
    window.alert("Thank you " + name + " for your enquiry. We will be in contact with you shortly via the given email address, " + email);
}

document.addEventListener('submit', event => {
    event.preventDefault();
    formSubmission();
});

// Image Modal Functionality
const portfolioImages = document.querySelectorAll(".clickable-img");

portfolioImages.forEach(image => {
    image.addEventListener("click", () => {
        const imageModal = document.createElement("div");
        imageModal.classList.add("image-modal");
        imageModal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">×</span>
                <img src="${image.src}" class="img-fluid">
            </div>
        `;
        document.body.appendChild(imageModal);
        
        // Add fade-in effect
        setTimeout(() => {
            imageModal.classList.add("show");
        }, 10); // Small delay to trigger transition

        document.querySelector(".close-modal").addEventListener("click", () => {
            imageModal.remove();
        });
    });
});

// Page animation
AOS.init({
    duration: 1000,
});
