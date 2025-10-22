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
  let nArray = n.toString().split("");
  let digitsArray = [...nArray];
  let resultArray = [];
  for (let i = 0; i < nArray.length; i++) {
    digitsArray.splice([i], 1);
    let digitString = digitsArray.join("");
    resultArray.push(digitString);
    digitsArray = [...nArray];
  }
  resultArray = resultArray.map((x) => parseInt(x));
  resultArray.sort((a, b) => a - b);
  let result = resultArray[resultArray.length - 1];
  return result;
}
// deleteDigit(109);

module.exports = {
  deleteDigit,
};
