const MORSE_TABLE = {
  '.-':     'a',
  '-...':   'b',
  '-.-.':   'c',
  '-..':    'd',
  '.':      'e',
  '..-.':   'f',
  '--.':    'g',
  '....':   'h',
  '..':     'i',
  '.---':   'j',
  '-.-':    'k',
  '.-..':   'l',
  '--':     'm',
  '-.':     'n',
  '---':    'o',
  '.--.':   'p',
  '--.-':   'q',
  '.-.':    'r',
  '...':    's',
  '-':      't',
  '..-':    'u',
  '...-':   'v',
  '.--':    'w',
  '-..-':   'x',
  '-.--':   'y',
  '--..':   'z',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':  '9',
  '-----':  '0',
};

function decode(expr) {
  // write your solution here
  let decodeText = '';
  for (let i = 0; i < expr.length / 10; i++) {
      let str = '';
      for (let j = 0; j < 5; j++){
          const substr00 = expr.substr(10 * i + j * 2, 2);
          if ( substr00 !== '00' && substr00 !== '**') {
              str += (substr00 === '10') ? '.' : '-';
          }
      }
      // console.log(str);
      decodeText += MORSE_TABLE[str] || ' ';
      // console.log(decodeText);
  }
  return decodeText;
}

// console.log(decode("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"));

module.exports = {
  decode
}