const moviesArr = [];
const httpPrefixString = "httpPrefixString";
// moviesObj.results.forEach((item, index, moviesArr) => {
//     moviesArr[index][0] = httpPrefixString + item.backdrop_path;
//     moviesArr[index][1] = httpPrefixString + item.poster_path;
//     moviesArr[index][2] = item.title;
//     moviesArr[index][3] = cutString(item.overview, MAX_STRING_LENGTH)  
//  })


for (let i = 0; i < 20; i++) {
    const itemArr = [];
    itemArr[0] = httpPrefixString + "item.backdrop_path";
    itemArr[1] = httpPrefixString + "item.poster_path";
    itemArr[2] = "item.title";
    itemArr[3] = "cutString(item.overview, MAX_STRING_LENGTH)";
    moviesArr[i] = itemArr;
}







console.log(moviesArr);
// console.log(arr[1])