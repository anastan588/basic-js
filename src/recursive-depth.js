const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // console.log(this);
    console.log(arr);
    let depth = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        depth = Math.max(depth, this.calculateDepth(arr[i])+1);
      }
    }
    console.log(depth);
    return depth;
  }
}

// const depth1 = new DepthCalculator();
// const depth2 = new DepthCalculator();
// depth1.calculateDepth([
//   1,
//   [8, [[]]],
//   2,
//   3,
//   [8, []],
//   4,
//   5,
//   ["6575", ["adas", ["dfg", [0]]]]
// ]);
// depth2.calculateDepth([
//   1,
//   [8, [[]]],
//   2,
//   3,
//   [8, [[[[[[[[[[[[[]]]]]]]]]]]]]],
//   [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]],
//   4,
//   5,
//   ["6575", ["adas", ["dfg", [0]]]]
// ]);

module.exports = {
  depthCalculator: new DepthCalculator(),
};
