const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  console.log(n);
  let template = /^[0-9a-f]{2}(-[0-9a-f]{2}){5}$/i;
  console.log(template.test(n));
  let result = template.test(n);
  return result;
}

// isMAC48Address("00-1B-63-84-45-E6");
// isMAC48Address("Z1-1B-63-84-45-E6");
// isMAC48Address("not a MAC-48 address");
// isMAC48Address("FF-FF-FF-FF-FF-FF");
// isMAC48Address("G0-00-00-00-00-00");

module.exports = {
  isMAC48Address,
};
