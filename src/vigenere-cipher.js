const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
function UserException(message) {
  this.message = message;
  this.name = "Error";
}
class VigenereCipheringMachine {
  encrypt(text, key) {
    if(!text || !key) throw new UserException('Incorrect arguments!');
    let text2 = text.replaceAll(' ', '').toLowerCase();
    let kf = Math.ceil(text.length / key.length);
    key = key.repeat(kf).toLowerCase();
   
    let  codeA = 'a'.charCodeAt(0);
    let abcCount = 26;
    
    let result = [];
  let res = '';
    for (let i = 0; i < text2.length; i++) {
      if(text2[i].match(/[a-z]/) == null) {
        result.push(text2[i])
      } else {
        let letterIndx = text2.charCodeAt(i) - codeA;
        let shift = key.charCodeAt(i) - codeA;
        result.push( String.fromCharCode(codeA + (letterIndx + shift) % abcCount));
      }      
    }
  let control = result.join('').toUpperCase();
   let c = 0;
    for(let i = 0; i < text.length; i++) {
      if(text[i] === ' ') {
        res += " ";
        c++;
  
      } else {
        res += control[i - c]
      }
     
    }
  return res;
  }
  decrypt(text, key) {
    if(!text || !key) throw new UserException('Incorrect arguments!');
      let text2 = text.replaceAll(' ', '').toLowerCase();
      let kf = Math.ceil(text2.length / key.length);
      key = key.repeat(kf).toLowerCase();
      text = text.toLowerCase();
      let  codeA = 'a'.charCodeAt(0);
      let abcCount = 26;
      let res = '';
      let result = [];
    
      for (let i = 0; i < text2.length; i++) {
          if (text2[i].match(/[a-z]/) == null) {
              result.push(text2[i]);
          } else {
              let letterIndx = text2.charCodeAt(i) - codeA;
              let shift = key.charCodeAt(i) - codeA;
    
              result.push( String.fromCharCode(codeA + (letterIndx - shift + abcCount) % abcCount));
          }
      }
      let control = result.join('').toUpperCase();
     let c = 0;
      for(let i = 0; i < text.length; i++) {
        if(text[i] === ' ') {
          res += " ";
          c++;
    
        } else {
          res += control[i - c]
        }
       
      }
    
      return res;
    
    };
  
}

module.exports = {
  VigenereCipheringMachine
};
