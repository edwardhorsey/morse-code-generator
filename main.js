import * as morse from "./morseObj.js"

const userInput = document.getElementById('input-in');
const langDetectOutput = document.getElementById('language-detect');
const outputBox = document.getElementById('morse-output');
const submitButton = document.getElementById('submit-button');

const morseDetectionHyphen = (string) => /^[\.-\s\|]+$/.test(string);
const morseDetectionUnderscore = (string) => /^[\._\s\|]+$/.test(string);

const toHyphens = (str) => str.split('').map(e=>e.replace('_', '-')).join('');
const fromHyphens = (str) => str.split('').map(e=>e.replace('-', '_')).join('');
const fromFowardSlash = (str) => str.split('').map(e=>e.replace('/', '|')).join('');
const trimWhiteSpace = (str) => str.replace(/\s+/g, ' ').trim();

const turnIntoMorse = (str) => {
  let output = trimWhiteSpace(str).toUpperCase().split('').map(e=>{
    return e === ' ' ? ' | ' : morse.morseObj[e];
  }).join(' ');
  return toHyphens(output);
};

const turnIntoEnglish = (str) => {
  let output = trimWhiteSpace(str).toUpperCase().split(' ').map(e=>{
    return e === '|' ? e : Object.keys(morse.morseObj).find(k=>{return morse.morseObj[k] === e});
  })
  return output.map(e=>e.replace('|', ' ')).join('');
}

submitButton.addEventListener('click', ()=>{
  let input = userInput.value;
  outputBox.innerHTML = '';
  if (morseDetectionHyphen(input)) {
    langDetectOutput.innerHTML = 'You entered morse code. Here\'s your English translation:';
    outputBox.innerHTML = turnIntoEnglish(fromHyphens(input));
  } else if (morseDetectionUnderscore(input)) {
    langDetectOutput.innerHTML = 'You entered morse code. Here\'s your English translation:';
    outputBox.innerHTML = turnIntoEnglish((input));
  } else {
    langDetectOutput.innerHTML = 'You entered english. Here\'s your morse code:';
    outputBox.innerHTML = turnIntoMorse(input);
  }
  outputBox.style.display = 'block';
});