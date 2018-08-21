import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';
import generateEven from './games/even';
import generateCalc from './games/calc';
import generateGcd from './games/gcd';

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

export const Game = (questionAnswerGenerator, description) => {
  const name = hello(description);
  for (let i = 3; i > 0;) {
    const questionAnswer = questionAnswerGenerator();
    const question = getQuestion(questionAnswer);
    const rightAnswer = getAnswer(questionAnswer);
    console.log(`Questions ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === rightAnswer) {
      console.log('Correct!');
      i -= 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      return `Let's try again, ${name}!`;
    }
  }
  return `Congratulations, ${name}!`;
};

export const even = () => console.log(Game(generateEven, 'Answer "yes" if number even otherwise answer "no".'));
export const calc = () => console.log(Game(generateCalc, 'What is the result of the expression?'));
export const gcd = () => console.log(Game(generateGcd, 'Find the greatest common divisor of given numbers'));
