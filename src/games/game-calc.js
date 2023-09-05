const rules = `What is the result of the expression?`;

const gameCalc = () => {

    const operandOne = Math.floor(Math.random() * 10);
    const operandTwo = Math.floor(Math.random() * 10);

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }

    let question = '';
    let correctAnswer = 0;
    switch (getRandomNumber(0,3)) {
        case 0:
            question = (`Question: ${operandOne} + ${operandTwo}`);
            correctAnswer = operandOne + operandTwo;
            break;
        case 1:
            question = (`Question: ${operandOne} - ${operandTwo}`);
            correctAnswer = operandOne - operandTwo;
            break;
        case 2 || 3:
            question = (`Question: ${operandOne} * ${operandTwo}`);
            correctAnswer = operandOne * operandTwo;
            break;
    }
    
    const gameData = [question, String(correctAnswer)];
    return gameData;
};

export {rules, gameCalc};