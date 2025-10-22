const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  domains = domains.reverse();
  domains = domains.sort((a, b) => a.length - b.length);
  let domainsTransform = domains.map(x =>
    x
      .split(".")
      .reverse()
      .join(".")
  );
  let domainArray = [];
  let resultObject = {};
  for (let i = 0; i < domainsTransform.length; i++) {
    for (let j = 0; j < domainsTransform[i].length; j++) {
      if (
        domainsTransform[i][j] === "." ||
        j === domainsTransform[i].length - 1
      ) {
        let iArray = "";
        if (j === domainsTransform[i].length - 1) {
          iArray = domainsTransform[i].slice(0, j + 1);
        } else {
          iArray = domainsTransform[i].slice(0, j);
        }
        domainArray.push(iArray);
      }
    }
  }
  let resultArray = domainArray.sort();
  let count = 1;
  for (let i = 0; i < resultArray.length + 1; i++) {
    if (resultArray[i] === resultArray[i - 1]) {
      count = count + 1;
    } else if (i > 0) {
      let key = `.${resultArray[i - 1]}`;
      resultObject[key] = count;
      count = 1;
    }
  }
  return resultObject;
}

// getDNSStats(["code.yandex.ru", "music.yandex.ru", "yandex.ru"]);
// getDNSStats(["epam.com"]);
// getDNSStats(["epam.com", "info.epam.com"]);
// getDNSStats([]);
module.exports = {
  getDNSStats
};
