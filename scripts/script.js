// JavaScript Document

// navigatie menu
var deButton = document.querySelector("nav button");
deButton.addEventListener("click", linksEnRechts);

function linksEnRechts(event) {
    navSelect = event.target.parentNode;
    navSelect.classList.toggle("toonNav");
}
// einde navigatie menu

// image slider
var pijlLinksButton = document.querySelector("#homepagina > ul:nth-of-type(1) button");
pijlLinksButton.addEventListener("click", pijlLinksGroter);

function pijlLinksGroter() {
    pijlLinksButton.classList.add("klikt");
    window.setTimeout(removeLinks, 500);
}
// setTimeout, na 500ms wordt de functie removeLinks aangeroepen

function removeLinks() {
    pijlLinksButton.classList.remove("klikt");
}

var pijlRechtsButton = document.querySelector("#homepagina > ul:nth-of-type(1) button:nth-of-type(2)");
pijlRechtsButton.addEventListener("click", pijlRechtsGroter);

function pijlRechtsGroter() {
    pijlRechtsButton.classList.add("klikt");
    window.setTimeout(removeRechts, 500);
}

function removeRechts() {
    pijlRechtsButton.classList.remove("klikt");
}

var listItems = document.querySelector("#homepagina > ul:nth-of-type(1) li");

pijlRechtsButton.addEventListener("click", slider);

function slider() {
    listItems.classList.add("klikt-rechts");
    window.setTimeout(removeButtonRechts, 500);
}

function removeButtonRechts() {
    listItems.classList.remove("klikt-rechts");
}

// Button naar top

var button = document.getElementById("top");
button.addEventListener("click", naarTop);
// als er op de button wordt geklikt wordt de functie naarTop aangeroepen

function naarTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.addEventListener("scroll",  scrollFunctie);
// Wanneer er wordt gescrolld, wordt de funtie scrollFunctie aangeroepen
// Wanneer de gebruiker omlaag scrollt, 300px vanaf de top, dan zal de button getoond worden.

function scrollFunctie () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        button.style.display = "block";
    }
    else {
        button.style.display = "none";
    }
}
// document.docuemtElement staat voor het hoofdelement van het document, dus <html>


// Dit is code die ik heb geprobeerd om de image slider werkend te krijgen, helaas is dat niet gelukt
// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function slider(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     if (n > slides.length) {slideIndex = 1}    
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";  
//     }
//     slides[slideIndex-1].style.display = "block";  
// }

// var sliderRechts = document.querySelector("#homepagina > ul:nth-of-type(1) button:nth-of-type(2)");
// var sliderRechtsList = document.querySelector("#homepagina > ul:nth-of-type(1) li");
// sliderRechts.addEventListener("click", sliderNaarRechts);

// function sliderNaarRechts() {
//     sliderRechtsList.classList.add("klikt-rechts");
//     window.setTimeout(removeSliderRechts, 500);
// }

// function removeSliderRechts() {
//     sliderRechtsList.classList.remove("klikt-rechts");
// }

console.log('hoi');