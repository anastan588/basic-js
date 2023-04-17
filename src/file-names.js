const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  console.log(names);
  let result = [];
  let number = 1;
  for (let i = 0; i < names.length; i++) {
    if (!result.includes(names[i])) {
      result.push(names[i]);
    } else {
      if (result.includes(`${names[i]}(${number})`)) {
        number = number + 1;
      }
      let addition = `(${number})`;
      console.log(number);
      result.push(`${names[i]}${addition}`);
      number = 1;
    }
  }
  console.log(result);
  return result;
}

// renameFiles(["file", "file", "image", "file(1)", "file"]);
// renameFiles(["doc", "doc", "image", "doc(1)", "doc"]);
// renameFiles(["a", "b", "cd", "b ", "a(3)"]);
// renameFiles([]);

module.exports = {
  renameFiles,
};
