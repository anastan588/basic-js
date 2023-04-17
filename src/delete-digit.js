const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  console.log(n);
  let nArray = n.toString().split("");
  console.log(nArray);
  let digitsArray = [...nArray];
  console.log(digitsArray);
  let resultArray = [];
  for (let i = 0; i < nArray.length; i++) {
    digitsArray.splice([i], 1);
    console.log(digitsArray)
    let digitString = digitsArray.join("");
    console.log(digitString);
    resultArray.push(digitString);
    digitsArray = [...nArray];
  }
  console.log(resultArray);
  resultArray = resultArray.map((x) => parseInt(x));
  resultArray.sort((a, b) => a - b);
  console.log(resultArray);
  let result = resultArray[resultArray.length - 1];
  return result;
}
// deleteDigit(109);

module.exports = {
  deleteDigit,
};
