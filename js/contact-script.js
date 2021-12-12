
//Submit button for form + validation

document.addEventListener('submit', event => {
event.preventDefault()
if(!checkNameInput()){
    alert("Invalid input. Your name is required in the 'Name' field.");
    document.getElementById("name").style.backgroundColor = "yellow";
}
else{
    checkPhoneInput()
}
 
})

//name field validation
function checkNameInput(){
    var alphaExp = /^[a-zA-Z]+$/;
    var name = document.getElementById("name")
    return name.value.match(alphaExp)
}

//phone field validation
function checkPhoneInput(){
    var phoneNumber = document.getElementById("phone")
    var numericExpression = /^[0-9]+$/;
    if (phoneNumber.value.match(numericExpression)) {
        hideContactForm()
    }
    else {
        alert("Invalid phone number. Please enter numeric value.");
        document.getElementById("phone").style.backgroundColor = "yellow";
    }
}

// Response to form submission 
function hideContactForm(){
    document.getElementById("submission-response").style.display = "none";
    formSubmission()
  }

function formSubmission(){
 var name = document.getElementById("name").value
 var email = document.getElementById("email").value
 var response = "Thank you, <span class='hyperlink-text'>"+name+"</span>, for your enquiry. <br><br>We will be in contact with you shortly to address your enquiry via the given email address, <span class='hyperlink-text'>" +email+"</span>. <br><br>To send another message, click <a class='hyperlink-text' href='contact.html'>here</a>.";
 document.getElementById("contact-form").innerHTML += response;
}

// New Toggler 
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
