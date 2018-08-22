import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

export const hello = (description = '') => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const random = (min = 0, max = 100) => Math.floor(Math.random() * (max - min)) + min;

export const makeQuestionAnswer = (question, answer) => cons(question, answer);
const getQuestion = questionAnswer => car(questionAnswer);
const getAnswer = questionAnswer => cdr(questionAnswer);

export const game = (questionAnswerGenerator, description) => {
  const name = hello(description);
  const numberRightAnswer = 3;
  let i = 0;
  while (i < numberRightAnswer) {
    const questionAnswer = questionAnswerGenerator();
    const question = getQuestion(questionAnswer);
    const rightAnswer = getAnswer(questionAnswer);
    console.log(`Questions ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === rightAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
