import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const numberRightAnswer = 3;

export default (questionAnswerGenerator, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < numberRightAnswer; i += 1) {
    const questionAnswer = questionAnswerGenerator();
    const question = car(questionAnswer);
    const rightAnswer = cdr(questionAnswer);
    console.log(`Questions ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${name}! \n`);
      return;
    }
  }
  console.log(`Congratulations, ${name}! \n`);
};
