import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export default (questionAnswerGenerator, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const numberRightAnswer = 3;
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
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
