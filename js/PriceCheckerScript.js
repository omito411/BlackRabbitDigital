let price = 0;

function servicesCalculate() {
    const numWebPages = parseInt(document.getElementById('num-web-pages').value) || 0;
    const seo = document.getElementById('seo').checked;
    const graphicDesign = document.getElementById('graphic-design').checked;
    const googleAds = document.getElementById('google-ads').checked;
    const socialMediaPosts = document.getElementById('social-media-posts').checked;
    const ecommerce = document.getElementById('ecommerce').checked;
    const support = document.getElementById('support').checked;

    price = numWebPages * 20;
    if (seo) price += numWebPages * 5;
    if (graphicDesign) price += numWebPages * 5;
    if (googleAds) price += numWebPages * 10;
    if (socialMediaPosts) price += numWebPages * 2;
    if (ecommerce) price += numWebPages * 15;
    if (support) price += numWebPages * 10;

    const messageElement = document.getElementById("message");
    messageElement.innerHTML = "Your Website will cost €" + price;
    // Trigger animation on price update
    messageElement.classList.remove("price-update");
    void messageElement.offsetWidth; // Force reflow to restart animation
    messageElement.classList.add("price-update");
}

function sendEmail() {
    window.open('mailto:sales@blackrabbitdigital.ie?subject=Online Quote&body=I have received a quote on your website for €' + price);
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
    var name = document.getElementById("name-price").value;
    var email = document.getElementById("email-price").value;

    window.alert("Thank you " + name + " for your enquiry. We will be in contact with you shortly via the given email address, " + email);
}

document.addEventListener('submit', event => {
    event.preventDefault();
    formSubmission();
});
