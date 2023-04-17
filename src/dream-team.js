const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  console.log(members);
  console.log(typeof members);
  if (Array.isArray(members) && members.length > 0) {
    let resultArray = [];
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === "string") {
        for (let m = 0; m < members[i].length; m++) {
          if (members[i][m] !== " ") {
            resultArray.push(members[i][m]);
            break;
          }
        }
      }
    }
    console.log(resultArray);
    resultArray = resultArray.map((x) => x.toUpperCase());
    console.log(resultArray);
    resultArray = resultArray.sort();
    console.log(resultArray);
    let result = resultArray.join("");
    console.log(result);
    return result;
  } else {
    return false;
  }
}

// createDreamTeam(["Matt", "Ann", "Dmitry", "Max"]);
// createDreamTeam([]);
// createDreamTeam(3);
// createDreamTeam(3.312312);
// createDreamTeam(false);
// createDreamTeam(null);
// createDreamTeam(undefined);
// createDreamTeam({ 'foo': 'bar' });
// createDreamTeam([
//   ["David Abram"],
//   ["Robin Attfield"],
//   "Thomas Berry",
//   ["Paul R.Ehrlich"],
//   "donna Haraway",
//   " BrIaN_gOodWiN  ",
//   {
//     0: "Serenella Iovino",
//   },
//   "Erazim Kohak",
//   "  val_plumwood",
// ]);

module.exports = {
  createDreamTeam,
};
