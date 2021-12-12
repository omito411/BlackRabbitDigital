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

// Countdown timer//
const countTo = "31 May 2023";

const c = setInterval(() => {
    const endDate = new Date(countTo);
    const currentDate = new Date();
    const totalSeconds = (endDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);  
    const hours = Math.floor(totalSeconds / 3600) % 24;  
    const mins = Math.floor(totalSeconds / 3600 / 60) % 60;  
    const secs = Math.floor(totalSeconds) % 60;  

    const countDown = document.getElementById("countdown");

    countDown.textContent = +days+'Days ' +format(hours)+'Hrs :' +format(mins)+'Min :' +format(secs)+'s';

    if(totalSeconds < 0) {
        clearInterval(c);
        countDown.textContent = "We're Live";
    }

}, 1000)

function format(t){
    return t < 10 ? '0'+t :+  t;
}

// Carousel //
let thumbnails = document.getElementsByClassName("thumbnail");
let carousels = document.getElementById("carousel");
let buttonRight = document.getElementById("slide-right");
let buttonLeft = document.getElementById("slide-left");


buttonLeft.addEventListener("click", () => {
    carousels.scrollLeft -= 125;
});

buttonRight.addEventListener("click", () => {
    carousels.scrollLeft += 125;
});

const maxScrollLeft = carousels.scrollWidth - carousels.clientWidth;
//alert(maxScrollLeft);

//AutoPlay carousel
function autoPlay() {
    if(carousels.scrollLeft > (maxScrollLeft - 1)){
        carousels.scrollLeft -= maxScrollLeft;
    }
    else{
        carousels.scrollLeft += 1;
    }
}

let play = setInterval(autoPlay, 50);

//Pause carousel while hovering
for (let i = 0; i < thumbnails.length; i++){
    thumbnails[i].addEventListener("mouseover", () => {
        clearInterval(play)
    })
    thumbnails[i].addEventListener("mouseout", () => {
        return play = setInterval(autoPlay, 50);
    })
}

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

// Page animation//
AOS.init({
    duration: 1000,
})


