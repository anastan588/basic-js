const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let countZero = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        countZero = countZero + 1;
      }
    }
  }
  let result = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (countZero === 0) {
        result = result + matrix[i][j];
      } else if (countZero > 0) {
        if (matrix[i][j] === 0) {
          for (let f = i; f >= 0; f--) {
            result = result + matrix[f][j];
          }
        }
      }
    }
  }
  return result;
}

// getMatrixElementsSum([
//   [0, 1, 1, 2],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3]
// ]);

// getMatrixElementsSum([
//   [1, 2, 3, 4],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3]
// ]);
// getMatrixElementsSum([
//   [1, 1, 1],
//   [2, 2, 2],
//   [3, 3, 3]
// ]);

// getMatrixElementsSum([[0]]);

// getMatrixElementsSum([[1], [5], [0], [2]]);

module.exports = {
  getMatrixElementsSum,
};
