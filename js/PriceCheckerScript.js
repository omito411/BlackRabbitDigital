let price = 0;



function servicesCalculate() {
    const name = document.getElementById('name-price');
    const  email = document.getElementById('email-price');
    const  numWebPages = document.getElementById('num-web-pages').value;
    const  seo = document.getElementById('seo');
    const  graphicDesign = document.getElementById('graphic-design');
    const  googleAds= document.getElementById('google-ads');
    const  socialMediaPosts = document.getElementById('social-media-posts');
    const  ecommerce = document.getElementById('ecommerce');
    const  support = document.getElementById('support');

    price += numWebPages * 20;
    if(seo.checked == true) {
        price += (numWebPages*5);
    }
    if(graphicDesign.checked == true) {
        price += (numWebPages*5);
    }
    if(googleAds.checked == true) {
        price += (numWebPages*10);
    }
    if(socialMediaPosts.checked == true) {
        price += (numWebPages*2);
    }
    if(ecommerce.checked == true) {
        price += (numWebPages*15);
    }
    if(support.checked == true) {
        price += (numWebPages*10);
    }
    //output
    document.getElementById("message").innerHTML = "Your Website will cost €" + price;
    goToTop();
}

function sendEmail(){
    window.open('mailto:sales@blackrabbitdigtal.ie?subject=Online Quote&body=I have recieved a quote on your website for ');

}

function goToTop(){
    document.getElementById('#services-form').scrollIntoView(true);
}


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
