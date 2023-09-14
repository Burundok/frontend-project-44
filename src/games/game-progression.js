import core from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'What number is missing in the progression?';

const calculate = (step, length, hiddenIndex) => {
  const arr = [];
  for (let i = 0; i <= length; i += 1) {
    arr.push(step * (i + 1));
  }
  const correctAnswer = String(arr[hiddenIndex]);
  arr[hiddenIndex] = '..';
  const arrString = arr.toString();
  const question = (`Question: ${arrString.replace(/,/g, ' ')}`);
  return [question, correctAnswer];
};

const dataProgression = () => {
  const step = Math.floor(Math.random() * 10 + 1);
  const length = getRandomNumber(4, 9);
  const hiddenIndex = getRandomNumber(0, length + 1);
  return calculate(step, length, hiddenIndex);
};

export { rules, dataProgression };

export default () => core(rules, dataProgression);
