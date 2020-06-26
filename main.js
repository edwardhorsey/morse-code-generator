import morseObj from "./modules/morseObj.js"

const userInput = document.getElementById('input-in');
const langDetectOutput = document.getElementById('language-detect');
const outputBox = document.getElementById('morse-output');
const submitButton = document.getElementById('submit-button');

const morseDetection = string => /^[\._\s\|\-\/]+$/.test(string);
const putBackInSpaces = str => str.replace(/[\/\|]/g, ' ');
const underScoreToHyphens = str => str.replace(/_/g, '-');
const trimWhiteSpace = str => str.replace(/\s+/g, ' ').trim();

const turnIntoMorse = str => str.toUpperCase().split('').map(el => el === ' ' ? ' | ' : morseObj[el]).join(' ');

const turnIntoEnglish = str => {
  const output = underScoreToHyphens(str).split(' ').map(el => {
    return el === '|' || el === '/' ? el : Object.keys(morseObj).find(key => morseObj[key] === el);
  }).join('');
  return putBackInSpaces(output);
}

submitButton.addEventListener('click', ()=>{
  let input = userInput.value;
  if (morseDetection(input)) {
    langDetectOutput.innerHTML = 'You entered morse code. Here\'s your English translation:';
    outputBox.value = turnIntoEnglish(trimWhiteSpace(input));
  } else {
    langDetectOutput.innerHTML = 'You entered english. Here\'s your morse code:';
    outputBox.value = turnIntoMorse(trimWhiteSpace(input));
  }
  outputBox.style.display = 'block';
});