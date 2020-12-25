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


console.log('hoi');