const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  console.log(email);
  let emailArray = email.split("");
  console.log(email);
  let domainArray = 0;
  for (let i=0;i<emailArray.length; i++) {
    if (emailArray[i]==="@") {
      domainArray = emailArray.splice(i+1,emailArray.length);
    }
  }
  console.log(domainArray);
  for (let i=0;i<domainArray.length; i++) {
    if (domainArray[i]==="@") {
      domainArray = domainArray.splice(i+1,domainArray.length);
    }
  }
  console.log(domainArray);
  let result = domainArray.join("");
  console.log(result);
  return result;
}

// getEmailDomain('very.unusual.@.unusual.com@usual.com');

module.exports = {
  getEmailDomain
};
