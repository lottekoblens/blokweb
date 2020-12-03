// JavaScript Document
var deButton = document.querySelector("nav button");
deButton.addEventListener("click", linksEnRechts);

function linksEnRechts(event) {
    navSelect = event.target.parentNode;
    navSelect.classList.toggle("toonNav");
}

console.log('hoi');