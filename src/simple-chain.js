const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    console.log(this.chain.length);
    return this.chain.length;
  },
  addLink(value) {
    if (typeof value !== "string") {
      this.chain.push(String(value));
    } else {
      this.chain.push(value);
    }

    console.log(this.chain);
    return this;
  },
  removeLink(position) {
    if (
      position > this.chain.length ||
      position <= 0 ||
      typeof position !== "number"
    ) {
      console.log(this.chain);
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } else if (
      position <= this.chain.length &&
      position > 0 &&
      typeof position === "number"
    ) {
      this.chain.splice(position - 1, 1);
      console.log(this.chain);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let resultChain = `( ${this.chain.join(" )~~( ")} )`;
    console.log(resultChain);
    this.chain = [];
    return resultChain;
  },
};

// chainMaker.addLink(1);
// chainMaker.addLink(2);
// chainMaker.addLink(3);
// chainMaker.removeLink(4);
// console.log(chainMaker);
// chainMaker.addLink(function () { }),
// chainMaker.addLink('2nd'),
// chainMaker.addLink('3rd'),
// chainMaker.removeLink(2),
// chainMaker.reverseChain(),
// chainMaker.finishChain(),
// // ( 3rd )~~( function () { } )
// console.log(chainMaker);

module.exports = {
  chainMaker,
};
