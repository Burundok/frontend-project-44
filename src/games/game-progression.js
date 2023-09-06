const rules = 'What number is missing in the progression?';

const gameProgression = () => {
  const step = Math.floor(Math.random() * 10 + 1);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const length = getRandomNumber(4, 9);
  const arr = [];
  for (let i = 0; i <= length; i += 1) {
    arr.push(step * (i + 1));
  }

  const x = getRandomNumber(0, length + 1);
  const correctAnswer = arr[x];
  arr[x] = '..';
  const arrString = arr.toString();
  const question = (`Question: ${arrString.replace(/,/g, ' ')}`);
  const gameData = [question, String(correctAnswer)];
  return gameData;
};

export { rules, gameProgression };
