const detailsImageElement = document.querySelector(".details-image");
const detailsTitleElement = document.querySelector(".details-title");
const thumbnailsAnchors = document.querySelectorAll(".thumnails-ancor");
const detailsSection = document.querySelector(".details-section");
const main = document.querySelector("main");
const HIDDEN = "hidden";
const POINT = "is-point"

const detailsSectionElement = document.querySelector(".details-section");
for (let i = 0; i < thumbnailsAnchors.length; i++) {
    thumbnailsAnchors[i].addEventListener("click", function() {setDetails(thumbnailsAnchors[i]);})}
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