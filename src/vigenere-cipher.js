const { NotImplementedError } = require('../lib');

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
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

class VigenereCipheringMachine {
  constructor(typeOfFunction) {
    if (typeOfFunction === undefined) this.typeOfFunction = true;
    else this.typeOfFunction = typeOfFunction;
  }

  encrypt(text, key) {
    if (!text || !key) throw new Error('Incorrect arguments!');
    text = text.toUpperCase();
    key = key.toUpperCase();
    let textStartArray = text.split('');
    let textArray = [];
    for (let i = 0; i < textStartArray.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (textStartArray[i] === alphabet[j]) {
          textArray.push(textStartArray[i]);
        }
      }
    }
    let keyArray = key.split('');
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
    let encryptNumberArray = [];
    let encriptkey = 0;
    let j = 0;
    for (let i = 0; i < textNumberArray.length; i++) {
      if (j > keyNumberArray.length - 1) {
        j = 0;
      }
      encriptkey = textNumberArray[i] + keyNumberArray[j];
      if (encriptkey > alphabet.length - 1) {
        encriptkey = encriptkey - alphabet.length;
      }
      encryptNumberArray.push(encriptkey);
      j = j + 1;
    }
    let k = 0;
    for (let i = 0; i < textStartArray.length; i++) {
      let count = 0;
      for (let j = 0; j < alphabet.length; j++) {
        if (textStartArray[i] === alphabet[j]) {
          k = k + 1;
          count = 1;
        }
      }
      if (count === 1) {
        textStartArray[i] = alphabet[encryptNumberArray[k - 1]];
      }
    }
    if (this.typeOfFunction === false) {
      textStartArray = textStartArray.reverse();
    }
    let result = textStartArray.join('');
    return result;
  }

  decrypt(text, key) {
    if (!text || !key) throw new Error('Incorrect arguments!');
    text = text.toUpperCase();
    key = key.toUpperCase();
    let keyArray = key.split('');
    let textStartArray = text.split('');
    let textArray = [];
    for (let i = 0; i < textStartArray.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (textStartArray[i] === alphabet[j]) {
          textArray.push(textStartArray[i]);
        }
      }
    }
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
    let encryptNumberArray = [];
    let encriptkey = 0;
    let j = 0;
    for (let i = 0; i < textNumberArray.length; i++) {
      if (j > keyNumberArray.length - 1) {
        j = 0;
      }
      encriptkey = textNumberArray[i] - keyNumberArray[j];
      if (encriptkey < 0) {
        encriptkey = encriptkey + alphabet.length;
      }
      encryptNumberArray.push(encriptkey);
      j = j + 1;
    }
    let k = 0;
    for (let i = 0; i < textStartArray.length; i++) {
      let count = 0;
      for (let j = 0; j < alphabet.length; j++) {
        if (textStartArray[i] === alphabet[j]) {
          k = k + 1;
          count = 1;
        }
      }
      if (count === 1) {
        textStartArray[i] = alphabet[encryptNumberArray[k - 1]];
      }
    }
    if (this.typeOfFunction === false) {
      textStartArray = textStartArray.reverse();
    }
    let result = textStartArray.join('');
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
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
