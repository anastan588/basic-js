const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let positiveArr = arr.filter(x => x > 0);
  console.log(positiveArr);
  let sortArray = positiveArr.sort((a, b) => a - b);
  console.log(sortArray);
  if (sortArray.length === 0) {
    return arr;
  }
  let count = 0;
    let m = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      if (count > 0) {
        m = i - count;
      } else {
        m = i;
      }
      arr.splice([i], 1, sortArray[m]);
    } else {
      count++;
    }
    console.log(count);
  }
  console.log(arr);
  return arr;
}

// sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);
// sortByHeight([-1, -1, -1, -1, -1]);
// sortByHeight([4, 2, 9, 11, 2, 16])


module.exports = {
  sortByHeight
};
