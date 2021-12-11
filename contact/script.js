


document.addEventListener('submit', event => {
event.preventDefault()
hideContactForm()

})

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



