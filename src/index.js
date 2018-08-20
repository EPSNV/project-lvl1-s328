import readlineSync from 'readline-sync';

const name = readlineSync.question('May I have your name? ');
export const hello = () => console.log(`Hello, ${name}!`);

export const isEven = (num) => {
  for (let i = num; i > 0;) {
    const r = Math.floor(Math.random() * 100);
    const rightAnswer = r % 2 === 0 ? 'yes' : 'no';
    console.log(`Questions ${r}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === rightAnswer) {
      console.log('Correct!');
      i -= 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${name}!`);
    }
  }
  return `Congratulations, ${name}!`;
};
