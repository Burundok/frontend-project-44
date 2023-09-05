const rules = `Find the greatest common divisor of given numbers.`;

const gameGcd = () => {
    let operandOne = Math.floor(Math.random() * 100);
    let operandTwo = Math.floor(Math.random() * 100);
    const question = (`Question: ${operandOne} ${operandTwo}`);


    if (operandOne === operandTwo) correctAnswer === operandOne;
    while (operandOne != operandTwo) {
        if (operandOne > operandTwo) {
            operandOne = operandOne - operandTwo;
        } else {
            operandTwo = operandTwo - operandOne;
        }
    }

    const correctAnswer = String(operandOne);

    const gameData = [question, correctAnswer];
    return gameData;
};

export {rules, gameGcd};