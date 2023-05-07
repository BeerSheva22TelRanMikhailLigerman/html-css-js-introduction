const detailsImageElement = document.querySelector(".details-image");
const detailsTitleElement = document.querySelector(".details-title");
const thumbnailsAnchors = document.querySelectorAll(".thumnails-ancor");
for (let i = 0; i < thumbnailsAnchors.length; i++) {
    thumbnailsAnchors[i].addEventListener("click", function() {setDetails(thumbnailsAnchors[i]);})}
function setDetails(anchor) {
    detailsImageElement.src = anchor.getAttribute("data-details-image");
    detailsTitleElement.innerHTML = anchor.getAttribute("data-details-text")
}