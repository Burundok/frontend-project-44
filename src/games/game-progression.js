import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'What number is missing in the progression?';

const makeProgression = (step, length) => {
  const arr = [];
  for (let i = 0; i <= length; i += 1) {
    arr.push(step * (i + 1));
  }
  return arr;
};

const generateDataProgression = () => {
  const step = getRandomNumber(1, 9);
  const length = getRandomNumber(4, 9);
  const hiddenIndex = getRandomNumber(0, length + 1);
  const progression = makeProgression(step, length);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => runGame(rules, generateDataProgression);
