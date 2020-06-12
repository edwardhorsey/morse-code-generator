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

let string = "'i\'m nervous this won\'t work', but hey i think it does"

const turnIntoMorse = (str) => {
  return str.toUpperCase().split('').map(e=>{
    return e === ' ' ? ' | ' : morseObj[e];
  }).join(' ');
};

const turnIntoEnglish = (str) => {
  let output = str.toUpperCase().split(' ').map(e=>{
    return e === '|' ? e : Object.keys(morseObj).find(k=>{return morseObj[k] === e});
  })
  return output.map(e=>e.replace('|', ' ')).join('');
}

const morseDetection = (string) => /^[\.\_\s\|]+$/.test(string);

const userInput = document.getElementById('input-in');
const langDetectOutput = document.getElementById('language-detect');
const outputBox = document.getElementById('morse-output');
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', ()=>{
  let input = userInput.value;
  outputBox.innerHTML = '';
  if (morseDetection(input)) {
    langDetectOutput.innerHTML = 'You entered morse code. Here\'s your English translation:';
    outputBox.innerHTML = turnIntoEnglish(input);
  } else {
    langDetectOutput.innerHTML = 'You entered english. Here\'s your morse code:';
    outputBox.innerHTML = turnIntoMorse(input);
  }
});