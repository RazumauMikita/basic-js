const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
function UserException(message) {
  this.message = message;
  this.name = "Error";
}
const chainMaker = {
  length: 0,
  chain: [],
  getLength() {
    return this.length;
  },
  addLink(value) {
    this.length++;
    this.chain.push(String(`( ${value} )`));
    return this;
  },
  removeLink(position) {
    if(position <= 0 || position > this.length || typeof position != 'number') {
      this.length = 0;
      this.chain = [];
      throw new UserException('You can\'t remove incorrect link!');
    } 
    else {
      this.chain.splice(position - 1, 1);
      this.length--;
    }
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = this.chain.join('~~');
    this.chain =[];
    return res;
  }
};

module.exports = {
  chainMaker
};
