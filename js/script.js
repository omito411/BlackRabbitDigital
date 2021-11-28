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