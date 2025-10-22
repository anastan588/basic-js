const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 *
 * @example
 *
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 *
 */
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

class VigenereCipheringMachine {
  constructor(typeOfFunction) {
    if (typeOfFunction === undefined) this.typeOfFunction = true;
    else this.typeOfFunction = typeOfFunction;
  }

  encrypt(text, key) {
    if (!text || !key) throw new Error("Incorrect arguments!");
    text = text.toUpperCase();
    key = key.toUpperCase();
    let textStartArray = text.split("");
    console.log(textStartArray);
    let textArray = [];
    for (let i = 0; i < textStartArray.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (textStartArray[i] === alphabet[j]) {
          textArray.push(textStartArray[i]);
        }
      }
    }
    console.log(textArray);
    let keyArray = key.split("");
    console.log(textArray);
    console.log(keyArray);
    let textNumberArray = [];
    let keyNumberArray = [];
    for (let i = 0; i < textArray.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (textArray[i] === alphabet[j]) {
          textNumberArray.push(alphabet.indexOf(alphabet[j]));
        }
      }
    }
    for (let i = 0; i < keyArray.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (keyArray[i] === alphabet[j]) {
          keyNumberArray.push(alphabet.indexOf(alphabet[j]));
        }
      }
    }
    console.log(textNumberArray);
    console.log(keyNumberArray);
    let encryptNumberArray = [];
    let encriptkey = 0;
    let j=0;
    for (let i = 0; i < textNumberArray.length; i++) {
      if (j > keyNumberArray.length - 1) {
        j = 0;
      }
      encriptkey = textNumberArray[i] + keyNumberArray[j];
      if (encriptkey > alphabet.length - 1) {
        encriptkey = encriptkey - alphabet.length;
      }
      encryptNumberArray.push(encriptkey);
      j = j+1;
    }
    console.log(encryptNumberArray);
    let k = 0;
    for (let i = 0; i < textStartArray.length; i++) {
      console.log(k);
      let count = 0;
      for (let j = 0; j < alphabet.length; j++) {
        if (textStartArray[i] === alphabet[j]) {
          console.log(encryptNumberArray[k]);
          console.log(alphabet[encryptNumberArray[k]]);
          console.log(textStartArray[i]);
          k = k + 1;
          count = 1;
        }
      }
      if (count === 1) {
        textStartArray[i] = alphabet[encryptNumberArray[k - 1]];
      }
    }
    console.log(textStartArray);
    if (this.typeOfFunction === false) {
      textStartArray = textStartArray.reverse();
    }
    let result = textStartArray.join("");
    console.log(result);
    return result;
  }

  decrypt(text, key) {
    if (!text || !key) throw new Error("Incorrect arguments!");
    text = text.toUpperCase();
    key = key.toUpperCase();
    let keyArray = key.split("");
    let textStartArray = text.split("");
    console.log(textStartArray);
    let textArray = [];
    for (let i = 0; i < textStartArray.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (textStartArray[i] === alphabet[j]) {
          textArray.push(textStartArray[i]);
        }
      }
    }
    console.log(textArray);
    console.log(keyArray);
    let textNumberArray = [];
    let keyNumberArray = [];
    for (let i = 0; i < textArray.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (textArray[i] === alphabet[j]) {
          textNumberArray.push(alphabet.indexOf(alphabet[j]));
        }
      }
    }
    for (let i = 0; i < keyArray.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (keyArray[i] === alphabet[j]) {
          keyNumberArray.push(alphabet.indexOf(alphabet[j]));
        }
      }
    }
    console.log(textNumberArray);
    console.log(keyNumberArray);
    let encryptNumberArray = [];
    let encriptkey = 0;
    let j=0;
    for (let i = 0; i < textNumberArray.length; i++) {
      if (j > keyNumberArray.length - 1) {
        j = 0;
      }
      // console.log(j);
      encriptkey = textNumberArray[i] - keyNumberArray[j];
      // console.log(encriptkey);
      if (encriptkey < 0) {
        encriptkey = encriptkey + alphabet.length;
      }
      console.log(encriptkey);
      encryptNumberArray.push(encriptkey);
      j = j+1;
    }
    console.log(encryptNumberArray);
    let k = 0;
    for (let i = 0; i < textStartArray.length; i++) {
      // console.log(k);
      let count = 0;
      for (let j = 0; j < alphabet.length; j++) {
        if (textStartArray[i] === alphabet[j]) {
          // console.log(encryptNumberArray[k]);
          // console.log(alphabet[encryptNumberArray[k]]);
          // console.log(textStartArray[i]);
          k = k + 1;
          count = 1;
        }
      }
      if (count === 1) {
        textStartArray[i] = alphabet[encryptNumberArray[k - 1]];
      }
    }
    console.log(textStartArray);
    if (this.typeOfFunction === false) {
      textStartArray = textStartArray.reverse();
    }
    let result = textStartArray.join("");
    console.log(result);
    return result;
  }
}

// const directMachine = new VigenereCipheringMachine();
// const reverseMachine = new VigenereCipheringMachine(false);

// directMachine.encrypt("attack at dawn!", "alphonse");
// reverseMachine.encrypt("attack at dawn!", "alphonse");
// directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse');
// reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse');
// directMachine.encrypt("Example of sequence: 1, 2, 3, 4.", "lilkey");
// directMachine.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js');

module.exports = {
  VigenereCipheringMachine,
};
