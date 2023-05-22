import moviesObj from '../movies.json' assert {type: 'json'};       //connecting the JSON from a file
const detailsImageElement = document.querySelector(".details-image");
const detailsTitleElement = document.querySelector(".details-title");
const thumbnailsAnchors = document.querySelectorAll(".thumnails-ancor");
const detailsSection = document.querySelector(".details-section");
const main = document.querySelector("main");
const HIDDEN = "hidden";
const POINT = "is-point"

const detailsSectionElement = document.querySelector(".details-section");

console.log(moviesObj.httpPrefix);

thumbnailsAnchors.forEach(anchor => anchor.addEventListener("click", setDetails.bind(undefined, anchor)));  //undefined - because setDetails doesn't use this

function setDetails(anchor) {
    showDetails();
    detailsImageElement.src = anchor.getAttribute("data-details-image");
    detailsTitleElement.innerHTML = anchor.getAttribute("data-details-text")
}
function showDetails() {
    main.classList.remove(HIDDEN);
    detailsSectionElement.classList.add(POINT);
    detailsSectionElement.classList.remove(POINT);
}
function hideDetails() {
    main.classList.add(HIDDEN);
}



