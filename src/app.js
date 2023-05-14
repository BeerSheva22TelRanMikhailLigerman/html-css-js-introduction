function getRandomIntNumber(min, max, minInclusive=true, maxInclusive=false) {
  if (!minInclusive) {
     min++;
  }
  if (maxInclusive) {
     max++;
  }
  return min < max ? Math.trunc(min + Math.random() * (max - min)) : NaN;
 }

 function getArrayRandomIntNumbers(nNumbers, min, max, minInclusive=true,
      maxInclusive=false) {
  let res = [];
  res.length = nNumbers;
  res =[...res];
  return res.map(() => getRandomIntNumber(min, max, minInclusive, maxInclusive) )
 }

 function getMatrixRandomIntNumbers (rows, columns, min, max){
  let res = [];
  res.length = rows;
  res =[...res];
  return res.map(() => getArrayRandomIntNumbers(columns, min, max, true, false) )
  
 }

// function getChesseLine(array){
//   let res = '';
//   if (Array.isArray(array)) {
//     const items = array.map(i => `<li ${i ? 'class="chess-wite-square"' : 'class="chess-black-square"'}></li>`);
//     res = `<ol class = "chess-line'>${items.join('')}</ol>`;
//   }
//   return res;
//}

 


function getChessMatrix(){ 
  let board = [];  
  for (let i = 0; i < 8; i++){
    board[i] = fillRow(i);
  }
  return board.join('');
}

function fillRow(rowNumber){
  let row = [];
  row.length = 8;
  let index = rowNumber % 2 == 0 ? 1 : 0;
  for (let i = 0; i < row.length; i++) {    
       row[i] = `<li ${index ? 'class="chess-wite-square"' : 'class="chess-black-square"'}></li>`;
       index = index ? 0 : 1;    
  }  
  return `<ol class = "chess-line">${row.join('')}</ol>`;
}

bodyId.innerHTML = getChessMatrix();

const body = document.querySelector("body");
body.classList.add("body-style");
// const allLists = document.querySelector("ol");
// allLists.classList.add("list-style");

console.log(getChessMatrix());

