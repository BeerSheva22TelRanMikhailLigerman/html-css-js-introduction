
//displayOccurrences(["lmn", "ab", "lmn", "c", "d", "ab", "a", "a", "lmn"])
console.log(isAnagram("Qwerty", "ytrewq"));
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

function isAnagram(string1, string2) {
  let res = false;
  if (string1.length === string2.length) {
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();
    let occurences = getOccurrences(Array.from(string1));
    res = Array.from(string2).every(s => occurences[s]-- > 0);
  }
  return res;
}

function getOccurrences(array) {
  return array.reduce((obj,s) => ({...obj, [s]: obj[s] ? obj[s] + 1 : 1}), {})
}











