const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  console.log(str);
  console.log(options);
  if (options.separator === undefined) {
    options.separator = "+";
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = "|";
  }
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  if (options.repeatTimes === undefined && options.separator !== undefined) {
    options.repeatTimes = 1;
  }
  if (
    options.addition !== undefined &&
    options.additionRepeatTimes === undefined
  ) {
    options.additionRepeatTimes = 1;
  }
  let additionArray = [];
  console.log(options.additionRepeatTimes);
  for (let i = 1; i <= options.additionRepeatTimes; i++) {
    if (i < options.additionRepeatTimes) {
      additionArray.push(`${options.addition}${options.additionSeparator}`);
    } else if (i === options.additionRepeatTimes) {
      additionArray.push(`${options.addition}`);
    }
  }
  console.log(additionArray);
  let additionString = additionArray.join("");
  console.log(additionString);
  let resultArray = [];
  for (let i = 1; i <= options.repeatTimes; i++) {
    // console.log( options.repeatTimes);
    // console.log(i);
    // console.log(options.addition);
    if (i < options.repeatTimes) {
      resultArray.push(`${str}${additionString}${options.separator}`);
    } else if (i === options.repeatTimes) {
      resultArray.push(`${str}${additionString}`);
    }
  }
  console.log(resultArray);
  let result = resultArray.join("");
  return result;
}
// repeater("STRING", {
//   repeatTimes: 3,
//   separator: "**",
//   addition: "PLUS",
//   additionRepeatTimes: 3,
//   additionSeparator: "00",
// });
// repeater("TESTstr", {
//   separator: "ds",
//   addition: "ADD!",
//   additionSeparator: ")))000",
// });

module.exports = {
  repeater,
};
