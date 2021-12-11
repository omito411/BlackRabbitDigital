// New Toggler //
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


// Search Modal //
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

//contact //

function formSubmission(){
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    
    window.alert("Thank you "+name+" for your enquiry. We will be in contact with you shortly via the given email address, " +email);
   }
   
   
   document.addEventListener('submit', event => {
   event.preventDefault()
   formSubmission()
   })
   
// Page animation//
AOS.init({
    duration: 1000,
})
