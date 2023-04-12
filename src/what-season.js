const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date = 0) {
  if(date == 0) return "Unable to determine the time of year!";
  if(!(date instanceof Date)) return false;
console.log(date)
  

  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  let month = date.getMonth()
  if(month == 11 || month == 1 || month == 0) return seasons[0];
  if(month == 2 || month == 3 || month == 4) return seasons[1];
  if(month == 5 || month == 6 || month == 7) return seasons[2];
  if(month == 8 || month == 9 || month == 10) return seasons[3];
  return 'Invalid date!';
}

module.exports = {
  getSeason
};
