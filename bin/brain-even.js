#!/usr/bin/env node

import readlineSync from 'readline-sync';
import userName from "../src/cli.js";

console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

for (let i = 0; i < 3; i += 1) {
    let randomNum = Math.floor(Math.random() * 100);
    console.log ("Question:", randomNum);
    let answer = readlineSync.question("Your answer: ");
    let correctAnswer = "";

    if (randomNum % 2 === 0) {
        correctAnswer = "yes"
    } else {
        correctAnswer = "no"
    }

    if (answer === correctAnswer) {
        console.log ("Correct!");
    } else {
        console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
        i = -1;
    }

}

console.log(`Congratulations, ${userName}!`);