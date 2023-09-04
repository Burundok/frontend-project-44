const rules = `Answer "yes" if given number is prime. Otherwise answer "no".`;

const gamePrime = () => {

    const randomNum = Math.floor(Math.random() * 1000);
    const question = (`Question: ${randomNum}`);
    
    let correctAnswer = "";
    for (let i = 2; i < randomNum; i++) {
        if (randomNum % i === 0) {
            correctAnswer = "yes"
        } else {
            correctAnswer = "no"
        }
    }

    const gameData = [question, correctAnswer];
    return gameData;
};

export {rules, gamePrime};