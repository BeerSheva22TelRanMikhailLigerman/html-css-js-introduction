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

function getOrderedList(array){
  res = '';
  if (Array.isArray(array)) {
    const items = array.map(i => `<li ${i ? 'class="item-style-black"' : 'class="item-style-white"'}></li>`);
    res = `<ol>${items.join('')}</ol>`
  }
  return res;
}

bodyId.innerHTML = getOrderedList(getArrayRandomIntNumbers(10, 0, 2));

const allLists = document.querySelector("ol");
allLists.classList.add("list-style");

