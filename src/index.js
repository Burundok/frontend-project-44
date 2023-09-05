import readlineSync from 'readline-sync';

export const core = (rules, gameArr) => {

    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);

    console.log(rules);

    let correctAnswers = 0;
    for (let i = 0; i < 3; i += 1) {
        let gameData = gameArr();

        console.log(gameData[0]);

        let answer = readlineSync.question("Your answer: ");

        if (answer === gameData[1]) {
            correctAnswers += 1;
            console.log ("Correct!");
        } else {
            console.log(`"${answer}" is wrong answer ;(. Correct answer was "${gameData[1]}".`);
            console.log(`Let's try again, ${userName}!`);
            break;
        }
    }
    if (correctAnswers >= 3) {
        console.log(`Congratulations, ${userName}!`);
    }
};