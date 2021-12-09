$(document).ready(function(){
    $("button.about-click").click(function(){
      $("#div1").css("display", "flex")
      .hide().fadeIn(3000);
      $("#div2").css("display", "flex")
      .hide().fadeIn(6000);
      $("#div3").css("display", "flex")
      .hide().fadeIn(9000);
    });
  });



function formSubmission(){
 var name = document.getElementById("name").value
 var email = document.getElementById("email").value
 
 window.alert("Thank you "+name+" for your enquiry. We will be in contact with you shortly via the given email address, " +email);
}


document.addEventListener('submit', event => {
    event.preventDefault()
    formSubmission()
})



