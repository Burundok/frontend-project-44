import core from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const calculate = (num) => {
  if (num <= 1) return 'no';
  let correctAnswer = 'yes';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      correctAnswer = 'no';
    }
  }
  return correctAnswer;
};

const dataPrime = () => {
  const randomNum = getRandomNumber(1, 1000);
  const question = (`Question: ${randomNum}`);
  const correctAnswer = calculate(randomNum);
  return [question, correctAnswer];
};

export default () => core(rules, dataPrime);
