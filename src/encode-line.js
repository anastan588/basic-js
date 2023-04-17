const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  console.log(str);
  if (str.length === 0) {
    return str;
  } else {
    let startArray = str.split("");
    console.log(startArray);
    let resultArray = [];
    let count = 0;
    let previousCount = 1;
    for (let i = 0; i < startArray.length; i++) {
      if (startArray[i] === startArray[i - 1]) {
        count = count + 1;
        previousCount = previousCount + 1;
      } else {
        count = 0;
      }
      console.log(i === startArray.length - 1);
      console.log(previousCount);
      if (count === 0 && previousCount > 1) {
        if (i === startArray.length - 1) {
          resultArray.push(previousCount);
          resultArray.push(startArray[i - 1]);
          resultArray.push(startArray[i]);
        } else {
          resultArray.push(previousCount);
          resultArray.push(startArray[i - 1]);
          previousCount = 1;
        }
      } else if (i === startArray.length - 1 && previousCount > 1) {
        resultArray.push(previousCount);
        resultArray.push(startArray[i]);
      } else if (
        count === 0 &&
        i === 0 &&
        startArray[i] !== startArray[i + 1]
      ) {
        console.log(startArray[i]);
        resultArray.push(startArray[i]);
      } else if (
        count === 0 &&
        i !== 0 &&
        startArray[i] !== startArray[i + 1]
      ) {
        resultArray.push(startArray[i]);
      }
    }
    console.log(resultArray);
    let result = resultArray.join("");
    console.log(result);
    return result;
  }
}

// encodeLine("aaaatttt");
// encodeLine("aabbccc");
// encodeLine("abbcca");
// encodeLine("xyz");
// encodeLine("");

module.exports = {
  encodeLine,
};
