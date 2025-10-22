const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let countMines = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === true) {
        countMines = countMines + 1;
      }
    }
  }

  let resultMatrix = JSON.parse(JSON.stringify(matrix));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (countMines === 0) {
        resultMatrix[i][j] = countMines;
      } else if (countMines > 0) {
        let countMinesAround = 0;
        if (i > 0 && j > 0 && matrix[i - 1][j - 1] === true) {
          countMinesAround = countMinesAround + 1;
        }
        if (i > 0 && matrix[i - 1][j] === true) {
          countMinesAround = countMinesAround + 1;
          console.log("[i - 1][j]");
        }
        if (
          i > 0 &&
          j < matrix[i].length - 1 &&
          matrix[i - 1][j + 1] === true
        ) {
          countMinesAround = countMinesAround + 1;
        }
        if (j > 0 && matrix[i][j - 1] === true) {
          countMinesAround = countMinesAround + 1;
        }
        if (j < matrix[i].length - 1 && matrix[i][j + 1] === true) {
          countMinesAround = countMinesAround + 1;
        }
        if (i < matrix.length - 1 && j > 0 && matrix[i + 1][j - 1] === true) {
          countMinesAround = countMinesAround + 1;
        }
        if (i < matrix.length - 1 && matrix[i + 1][j] === true) {
          countMinesAround = countMinesAround + 1;
        }
        if (
          i < matrix.length - 1 &&
          j < matrix[i].length - 1 &&
          matrix[i + 1][j + 1] === true
        ) {
          countMinesAround = countMinesAround + 1;
        }
        resultMatrix[i][j] = countMinesAround;
        
      }
    }
  }
  return resultMatrix;
}
// minesweeper([
//   [true, false, false],
//   [false, true, false],
//   [false, false, false]
// ]);

// minesweeper([
//   [false, false, false],
//   [false, false, false]
// ]);

module.exports = {
  minesweeper
};
