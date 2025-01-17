const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  if (s1.length > 0 && s2.length > 0) {
    console.log(s1);
    console.log(s2);
    let s1Array = s1.split("").sort();
    console.log(s1Array);
    let s2Array = s2.split("").sort();
    console.log(s2Array);
    for (let i = 0; i < s1Array.length; i++) {
      for (let j = 0; j < s2Array.length; j++) {
        if (s1Array[i] === s2Array[j]) {
          count = count + 1;
          s1Array.splice([i], 1);
          s2Array.splice([j], 1);
          console.log(s1Array);
          console.log(s2Array);
          i = i - 1;
          j = j - 1;
        }
      }
    }
    console.log(count);
    return count;
  } else {
    console.log(count);
    return count;
  }
}

// getCommonCharacterCount("aabcc", "adcaa");
// getCommonCharacterCount("zzzz", "zzzzzzz");
// getCommonCharacterCount("abca", "xyzbac");
// getCommonCharacterCount("", "abc");
// getCommonCharacterCount("a", "b");

module.exports = {
  getCommonCharacterCount,
};
