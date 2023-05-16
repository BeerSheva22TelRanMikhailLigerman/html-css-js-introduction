
displayOccurrences(["lmn", "ab", "lmn", "c", "d", "ab", "a", "a", "lmn"])
/*lmn -> 3
 a -> 2
 ab -> 2
 c -> 1
 d -> 1 */

function displayOccurrences(array) {
  //array of strings
  //display strings with their coccurency counts in the descending order of the counts
  //if counts are equaled then in ascending string values order
  const obj = {};
  array.forEach(item => obj[item] === undefined ? obj[item] = 1 : obj[item]++);
  let res = Object.entries(obj);
  res.sort((a, b) => b[1] - a[1] == 0 ? a[0].localeCompare(b[0]) : b[1] - a[1]);
  res.forEach(item => console.log(`${item[0]} -> ${item[1]}`));
}





