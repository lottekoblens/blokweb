// JavaScript Document
var deButton = document.querySelector("button");
deButton.addEventListener("click", navMenu);

function navMenu() {
    var navSelect = document.querySelector("header nav");
    navSelect.classList.toggle("nav.toonNav");
}

console.log('hoi');