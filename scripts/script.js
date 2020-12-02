// JavaScript Document
var deButton = document.querySelector('nav button');
deButton.addEventListener("click", linksEnRechts);

function linksEnRechts() {
    var navSelect = document.querySelector('nav');
    navSelect.classList.toggle('toonNav');
}

console.log('hoi');