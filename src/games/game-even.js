import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateDataEven = () => {
  const randomNum = getRandomNumber(1, 100);
  const question = `${randomNum}`;
  const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => runGame(rules, generateDataEven);
