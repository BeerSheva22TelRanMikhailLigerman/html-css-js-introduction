const detailsImageElement = document.querySelector(".details-image");
const detailsTitleElement = document.querySelector(".details-title");
const thumbnailsAnchors = document.querySelectorAll(".thumnails-ancor");
const detailsSection = document.querySelector(".details-section");
const main = document.querySelector("main");
const HIDDEN = "hidden";
const POINT = "is-point"

const detailsSectionElement = document.querySelector(".details-section");

// for (let i = 0; i < thumbnailsAnchors.length; i++) {
//     // thumbnailsAnchors[i].addEventListener("click", function() {setDetails(thumbnailsAnchors[i]);})
//     // addEventListener.apply(thumbnailsAnchors[i], ["click", function() {setDetails(thumbnailsAnchors[i]);}])
//     addEventListener.call(thumbnailsAnchors[i], "click", function() {setDetails(thumbnailsAnchors[i]);})
//     //  lines 12,13,14 are equal
// }

//instead the cycle in lines 11-16 (Exm.1):

// thumbnailsAnchors.forEach(ancor => addEventListener.apply(ancor, ["click", function() {setDetails(ancor);}]))

//instead the cycle in lines 11-16 (Exm.2):

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