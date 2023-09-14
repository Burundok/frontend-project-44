import core from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'Find the greatest common divisor of given numbers.';

const calculate = (num1, num2) => {
  let operandOne = num1;
  let operandTwo = num2;
  while (operandTwo !== 0) {
    const remainder = operandOne % operandTwo;
    operandOne = operandTwo;
    operandTwo = remainder;
  }
  return String(operandOne);
};

const dataGcd = () => {
  const operandOne = getRandomNumber(1, 100);
  const operandTwo = getRandomNumber(1, 100);
  const question = (`Question: ${operandOne} ${operandTwo}`);
  const correctAnswer = calculate(operandOne, operandTwo);
  return [question, correctAnswer];
};

export default () => core(rules, dataGcd);
