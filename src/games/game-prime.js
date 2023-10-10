import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateDataPrime = () => {
  const randomNum = getRandomNumber(1, 1000);
  const question = (`${randomNum}`);
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => runGame(rules, generateDataPrime);
