const { NotImplementedError } = require('../extensions/index.js');

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
function createDreamTeam(arr) {
  if (!Array.isArray(arr)) return false;
  return arr
    .filter((el) => typeof(el) == 'string')
    .map((el) => el.replaceAll(" ", "").toUpperCase())
    .sort()
    .reduce((acc, cur) => acc + cur[0], '')
   
}

module.exports = {
  createDreamTeam
};
