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
var pijlButton = document.querySelector("#homepagina > ul:nth-of-type(1) button");
pijlButton.addEventListener("click", pijlGroter);

function pijlGroter() {
    pijlButton.classList.add("klikt");
    window.setTimeout(remove, 500);
}

function remove() {
    pijlButton.classList.remove("klikt");
}

console.log('hoi');