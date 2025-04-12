// Ensure jQuery is loaded before executing this script
$(document).ready(function(){
    // Meet the Team button animation
    $("button.about-click").click(function(){
        $("#div1").css("display", "flex").hide().fadeIn(3000);
        $("#div2").css("display", "flex").hide().fadeIn(6000);
        $("#div3").css("display", "flex").hide().fadeIn(9000);
    });
});

// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navUL = document.querySelector(".nav-ul");

if (hamburger && close && navUL) {
    hamburger.addEventListener("click", () => {

        console.log("Hamburger clicked");
        navUL.classList.toggle("show");
        hamburger.classList.toggle("hide");
    });

    close.addEventListener("click", () => {
        console.log("Close clicked");
        navUL.classList.toggle("show");
        hamburger.classList.toggle("hide");
    });

} else {
    console.error("Hamburger, close, or nav-ul not found")
}


// Prevent form reload on submit
document.addEventListener('submit', event => {
    event.preventDefault();
    formSubmission();
});

// 🔧 Fix: Define Search Modal
const modal = document.getElementById("search-modal"); // ✅ Fix added

const btn = document.querySelector(".search");
const closeModal = document.querySelector(".close-modal");

if (btn && modal && closeModal) {
    btn.addEventListener("click", openPopup);
    closeModal.addEventListener("click", closePopup);

    function openPopup(e) {
        e.preventDefault();
        modal.style.display = "block";
    }

    function closePopup() {
        modal.style.display = "none";
    }
} else {
    console.error("Search-modal, button, or, close button not found");
}

// Form Submission Handling
const searchForm = 
document.getElementById("search-form");
if (searchForm){
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const query = document.getElementById("search-input").value;
        alert("searching for: " + query); // replace with actual search logic
        closePopup();
    })
}
