const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  for(let i = 0, j = 0; i < str.length; i++) {
    if(str[i] == str[i - 1]) continue;
    let count = 1;
    j = i;
    while(str[j + 1] == str[i]) {
      count++;
      j++;
    }
    if( count == 1) {
      res += `${str[i]}`
    } else {
      res += `${count}${str[i]}`
    }
    
  }
  return res;
}
module.exports = {
  encodeLine
};
