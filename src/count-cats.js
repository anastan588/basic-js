const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  [, 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let newMatrix = [...matrix];
  let count = 0;
  for (let i = 0; i < newMatrix.length; i++) {
    for (let j = 0; j < newMatrix[i].length; j++) {
      if (newMatrix[i][j] === "^^") {
        count = count + 1;
      }
    }
  }
  return count;
}

// countCats([
//   ["##", "dd", "00"],
//   ["^^", "..", "ss"],
//   ["AA", "dd", "Oo"],
// ]);

module.exports = {
  countCats,
};
