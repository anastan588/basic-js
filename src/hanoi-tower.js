const { NotImplementedError } = require('../lib');;

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let numberOfSteps = Math.pow(2, disksNumber) - 1;
  let secondsinHour = 60 * 60;
  let resultObject = {};
  resultObject["turns"] = numberOfSteps;
  let speedInSecond = turnsSpeed / secondsinHour;
  let timeOfResolve = Math.floor(numberOfSteps / speedInSecond);
  resultObject["seconds"] = timeOfResolve;
  return resultObject;
}

// calculateHanoi(9, 4308);

module.exports = {
  calculateHanoi,
};
