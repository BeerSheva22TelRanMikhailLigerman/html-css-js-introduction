import moviesObj from '../movies.json' assert {type: 'json'};       //connecting the JSON from a file
const detailsImageElement = document.querySelector(".details-image");
const detailsTitleElement = document.querySelector(".details-title");
const thumbnailsList = document.querySelector(".thumbnails-list");



const detailsSection = document.querySelector(".details-section");
const main = document.querySelector("main");
const HIDDEN = "hidden";
const POINT = "is-point"
const MAX_STRING_LENGTH = 55;
const detailsSectionElement = document.querySelector(".details-section");

const httpPrefixString = moviesObj.httpPrefix;

const moviesArr = [];
moviesObj.results.forEach((item, index) => {
    const itemArr = [];
    itemArr[0] = httpPrefixString + item.backdrop_path;
    itemArr[1] = httpPrefixString + item.poster_path;
    itemArr[2] = item.title;
    itemArr[3] = cutString(item.overview, MAX_STRING_LENGTH);
    moviesArr[index] = itemArr;
})

const listItemsArr = [];
moviesArr.forEach((item, index) => {
    listItemsArr[index] = `<li class="thumbnails-item">
    <a 
        href="#" class="thumnails-ancor"
        data-details-image="${item[0]}" 
        data-details-text="${item[3]}">
        <img src="${item[1]}" class="thumnails-image">
        <span class="thumbnails-title">${item[2]}</span>
    </a>
</li>`

});

thumbnailsList.innerHTML = listItemsArr.join('');



function cutString(string, maxLength) {
    let res = '';
    if (string.length <= maxLength) {
        res = string
    } else {
        res = string.slice(0, maxLength);
        const lastSpaceInd = res.lastIndexOf(' ');
        if (lastSpaceInd !== -1) {
            res = res.slice(0, lastSpaceInd)
        }
        res = res + "..."
    }
    return res;
}

const thumbnailsAnchors = document.querySelectorAll(".thumnails-ancor");

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



