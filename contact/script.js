function formSubmission(){
 var name = document.getElementById("name").value
 var email = document.getElementById("email").value
 var companyName = document.getElementById("companyName").value
 var enquiry = document.getElementById("enquiry").value

 alert("Thank you "+name+" for your enquiry. We will be in contact with you shortly via the given email address, " +email);
}