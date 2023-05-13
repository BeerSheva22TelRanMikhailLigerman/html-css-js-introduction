// let arr = [1, 2, 3];
// arr.forEach(n  => n = n ** 2);
// console.log(arr);

function getRandomInrNumber(min, max, minInclusive = true, maxIncusive = false) {
  return Math.floor(min + Math.random * max +1);
}