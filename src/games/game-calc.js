import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (operandOne, operator, operandTwo) => {
  switch (operator) {
    case '+':
      return operandOne + operandTwo;
    case '-':
      return operandOne - operandTwo;
    case '*':
      return operandOne * operandTwo;
    default:
      return 'Error';
  }
};

const generateDataCalc = () => {
  const operandOne = getRandomNumber(1, 10);
  const operandTwo = getRandomNumber(1, 10);
  const operator = operators[getRandomNumber(0, 3)];
  const question = `${operandOne} ${operator} ${operandTwo}`;
  const correctAnswer = calculate(operandOne, operator, operandTwo);
  return [question, String(correctAnswer)];
};

export default () => runGame(rules, generateDataCalc);
