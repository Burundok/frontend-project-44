const rules = 'Find the greatest common divisor of given numbers.';

const gameGcd = () => {
  let operandOne = Math.floor(Math.random() * 100);
  let operandTwo = Math.floor(Math.random() * 100);
  const question = (`Question: ${operandOne} ${operandTwo}`);
  let correctAnswer = operandOne;

  if (operandOne === operandTwo) {
    const gameData = [question, correctAnswer];
    return gameData;
  }

  while (operandOne !== operandTwo) {
    if (operandOne > operandTwo) {
      operandOne -= operandTwo;
    } else {
      operandTwo -= operandOne;
    }
  }

  correctAnswer = String(operandOne);

  const gameData = [question, correctAnswer];
  return gameData;
};

export { rules, gameGcd };
