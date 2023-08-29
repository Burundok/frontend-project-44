const rules = `Answer "yes" if the number is even, otherwise answer "no".`;

const gameEven = () => {
    const randomNum = Math.floor(Math.random() * 100);
    const question = (`Question: ${randomNum}`);


    let correctAnswer = "";
    if (randomNum % 2 === 0) {
        correctAnswer = "yes"
        } else {
        correctAnswer = "no"
    }

    const gameData = [question, correctAnswer];
    return gameData;
};

export {rules, gameEven};