const { NotImplementedError } = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (
    typeof sampleActivity === "string" &&
    sampleActivity < 15 &&
    sampleActivity > 0
  ) {
    let livingActivity = 15;
    let result = Math.ceil(
      (Math.log(livingActivity / sampleActivity) / 0.693) * 5730
    );
    return result;
  } else {
    return false;
  }
}

// dateSample("3");
// dateSample("1");
// dateSample("9");
// dateSample("11");
// dateSample("ACTIVITY OVER 9000");
// dateSample("one");
// dateSample("");
// dateSample(" ");
// dateSample(" \n\t\r");

module.exports = {
  dateSample,
};
