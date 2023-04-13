const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  
  options.repeatTimes = options.repeatTimes || 1;
  options.separator = options.separator || '+';
  if(typeof(options.addition) == 'boolean') {
    options.addition = options.addition.toString();
  } else {
    options.addition = options.addition ?? '';
  }
  options.additionRepeatTimes = options.additionRepeatTimes || 1;
  options.additionSeparator = options.additionSeparator || '|';

  let res = [];
for(let i = 0; i < options.repeatTimes; i++) {
  let subres = [];
  res.push(str);
  for(let j = 0; j < options.additionRepeatTimes; j++) {
    subres.push(options.addition);
  }
  
 res[i] += subres.join(options.additionSeparator)

}

return res.join(options.separator);
}

module.exports = {
  repeater
};
