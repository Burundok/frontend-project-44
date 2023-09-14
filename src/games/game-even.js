import core from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const calculate = (num) => num % 2 === 0;

const dataEven = () => {
  const randomNum = getRandomNumber(1, 100);
  const question = (`Question: ${randomNum}`);
  const correctAnswer = calculate(randomNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => core(rules, dataEven);
