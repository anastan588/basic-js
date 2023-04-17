const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let nString = n.toString();
  let nArray = nString.split("");
  console.log(nArray);
  let sum1 = 0;
  for (let i = 0; i < nArray.length; i++) {
    sum1 = sum1 + parseInt(nArray[i]);
  }
  console.log(sum1);
  let sumArr = sum1.toString().split("");
  if (sumArr.length === 1) {
    n = sum1;
  } else {
    let sum2 = 0;
    for (let i = 0; i < sumArr.length; i++) {
      sum2 = sum2 + parseInt(sumArr[i]);
    }
    // console.log(sum2);
    n = sum2;
  }
  console.log(n);
  return n;
}

// getSumOfDigits(100);
// getSumOfDigits(91);
// getSumOfDigits(35);
// getSumOfDigits(99);
// getSumOfDigits(123);

module.exports = {
  getSumOfDigits
};
