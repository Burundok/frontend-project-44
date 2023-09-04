const rules = `What number is missing in the progression?`;

const gameProgression = () => {
    let step = Math.floor(Math.random() * 10 + 1);

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }
    
    let length = getRandomNumber(5, 10);
    let arr = [];
    for (let i = 0; i <= length; i += 1) {
        arr.push(step * (i + 1));
    }

    let x = getRandomNumber(1, length);
    const correctAnswer = arr[x];
    arr[x] = "..";
    let arrString = arr.toString();
    const question = (`Question: ${arrString.replace(/,/g, ' ')}`);
    // console.log(question);
    // console.log(correctAnswer);
    const gameData = [question, String(correctAnswer)];
    return gameData;
};

export {rules, gameProgression};