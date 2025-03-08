// Ensure jQuery is loaded before executing this script
$(document).ready(function(){
    // Meet the Team button animation
    $("button.about-click").click(function(){
        $("#div1").css("display", "flex").hide().fadeIn(3000);
        $("#div2").css("display", "flex").hide().fadeIn(6000);
        $("#div3").css("display", "flex").hide().fadeIn(9000);
    });
});

// Form Submission Handling
function formSubmission() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    
    window.alert("Thank you " + name + " for your enquiry. We will be in contact with you shortly via the given email address, " + email);
}

// Prevent form reload on submit
document.addEventListener('submit', event => {
    event.preventDefault();
    formSubmission();
});

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
const modal = document.getElementById("modal"); // ✅ Fix added

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
