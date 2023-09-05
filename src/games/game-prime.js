const rules = `Answer "yes" if given number is prime. Otherwise answer "no".`;

const gamePrime = () => {
    
    let randomNum = Math.floor(Math.random() * 1000);
    let question = (`Question: ${randomNum}`);
    
    let correctAnswer = "yes";
    for (let i = 2; i < randomNum; i += 1) {
        if (randomNum % i === 0) {
            correctAnswer = "no";
            break;
        }
    }

    const gameData = [question, correctAnswer];
    return gameData;
};

export {rules, gamePrime};