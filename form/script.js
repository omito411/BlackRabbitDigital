function submitProjectForm() {
    const nameInput = document.getElementById("name").value.trim();
    const emailInput = document.getElementById("email").value.trim();
    const projectType = document.getElementById("project-type").value;

    if (nameInput === "" || emailInput === "" || projectType === "") {
        alert("Please fill out all required fields.");
        return;
    }

    // ✅ Fix: Reset form fields after submission
    document.getElementById("project-form").reset();

    const confirmationMessage = document.getElementById("confirmation-message");
    confirmationMessage.innerHTML = `Thank you, <strong>${nameInput}</strong>. 
    We have received your request for <strong>${projectType.replace("-", " ")}</strong>. 
    Our team will contact you soon at <strong>${emailInput}</strong>.`;
    confirmationMessage.style.display = "block";
}

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

// 🔧 Fix: Define Search Modal
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
