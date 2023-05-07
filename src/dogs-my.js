const detailImg = document.querySelector(".details-image");
const detailText = document.querySelector(".details-title");
const thumbnailsLinks = document.querySelectorAll(".thumnails-ancor");

for (let i = 0; i < thumbnailsLinks.length; i++){
    thumbnailsLinks[i].addEventListener("click", function() {setAttributes(thumbnailsLinks[i])});}

function setAttributes(links){
    detailImg.src = links.getAttribute("data-details-image");
    detailText.innerHTML = links.span.innerHTML;
}