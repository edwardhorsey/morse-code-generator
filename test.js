
const morseObj = {

  A:  '._'	 	,
  B:	'_...',
  C:	'_._.',
  D:	'_..',
  E: 	'.',
  F: 	'.._.',
  G: 	'__.',
  H: 	'....',
  I: 	'..',
  J: 	'.___',
  K: 	'_._',
  L: 	'._..',
  M: 	'__',
  N: 	'_.',
  O:  '___',
  P:  '.__.',
  Q:  '__._',
  R:  '._.',
  S:  '...',
  T:  '_',
  U:  '.._',
  V:  '..._',
  W:  '.__',
  X:  '_.._',
  Y:  '_.__',
  Z:  '__..',

	1:	'.____',
	2:	'..___',
	3:	'...__',
	4:	'...._',
	5:	'.....',
  6:	'_....'	,
  7:	'__...'	,
  8:	'___..'	,
  9:	'____.'	,
  0:	'_____',

  ',': '_ _ . . _ _',
  '.': ' . _ . _ . _ ',
  '?':  '. . _ _ . .',
  ';':  '_ . _ . _ . ',
  ':':  '_ _ _ . . .',
  '/':  '_ . . _ . ',
  '-':  '_ . . . . _',
  "'":  '. _ _ _ _ . ',
  '"':  '. _ . . _ .',
  '(':  '_ . _ _ .',
  ')':  '_ . _ _ . _ ',
  '=':  '_ . . . _',
  '+': '. _ . _ . ',
  '*':   '_ . . _',
  '@':  '. _ _ . _ .',

}


let string = '. _..'







console.log(/^[\.\_\s\|]+$/.test(string));


const turnIntoEnglish = (str) => {
  let output = str.toUpperCase().split(' ').map(e=>{
    return e === '|' ? e : Object.keys(morseObj).find(k=>{return morseObj[k] === e});
  })
  return output.map(e=>e.replace('|', ' ')).join('');
}


console.log(turnIntoEnglish(string));















// const turnIntoEnglish = (str) => {
//   // let string = str.replace(/\s/g, ' | ')
//   // console.log(string);
//   let string = str.toUpperCase().split(' ');
//   let output = string.map(e=>{
//     if (e === '|') {
//       return e}
//       else {return Object.keys(morseObj).find(k=>{morseObj[k] === e}); }
//   })

//   console.log(string, output);
//   return output;
// }