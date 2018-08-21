import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

export const hello = (description = '') => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const isEven = number => number % 2 === 0 ? 'yes' : 'no';
const random = (maxNumber = 100) => Math.floor(Math.random() * maxNumber);

const makeQuestionAnswer = (question, answer) => cons(question, answer);
const getQuestion = questionAnswer => car(questionAnswer);
const getAnswer = questionAnswer => cdr(questionAnswer);

const generateEven = () => {
  const argument = random();
  return makeQuestionAnswer(argument, isEven(argument));
};

const generateCalc = () => {
  const firstArgument = random();
  const secondArgument = random();
  const sign = random(3);
  console.log(sign);
  switch (sign) { // вот тут мне не нравится, но пока не придумал как упростить.
    case 0: return makeQuestionAnswer(`${firstArgument}+${secondArgument}`, `${firstArgument + secondArgument}`);
    case 1: return makeQuestionAnswer(`${firstArgument}-${secondArgument}`, `${firstArgument - secondArgument}`);
    case 2: return makeQuestionAnswer(`${firstArgument}*${secondArgument}`, `${firstArgument * secondArgument}`);
    default: return undefined;
  }
};

export const Game = (numberRightAnswer, questionAnswerGenerator, description) => {
  const name = hello(description);
  for (let i = numberRightAnswer; i > 0;) {
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
      console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export const even = () => Game(3, generateEven, 'Answer "yes" if number even otherwise answer "no".');
export const calc = () => Game(3, generateCalc, 'What is the result of the expression?');

/*
Легкая наркомания :) Пытался через пары создать сущность, которая будет содержать
два числа, знак и методы для обработки всего этого под цели игры Калькулятор.
const makeCalcArguments = (firstArgument, secondArgument) => cons(firstArgument, secondArgument);
const getFirstArgument = calcArguments => car(calcArguments);
const getSecondArgument = calcArguments => cdr(calcArguments);
const sumCalcArguments = calcArguments => car(calcArguments) + cdr(calcArguments);
const subCalcArguments = calcArguments => car(calcArguments) - cdr(calcArguments);
const multCalcArguments = calcArguments => car(calcArguments) * cdr(calcArguments);

const makeCalc = (sign, calcArguments) => cons(sign, calcArguments);
const getSign = calc => car(calc);
const getCalcArguments = calc => cdr(calc);
const calculate = (calc) => {
  switch(getSign(calc)) {
    case '+': return sumCalcArguments(getCalcArguments(calc));
    case '-': return subCalcArguments(getCalcArguments(calc));
    case '*': return multCalcArguments(getCalcArguments(calc));
    default: return undefined;
  }
 const calcToString = calc => {
   firstArgument = getFirstArgument(getCalcArguments(calc));
   secondArgument = getSecondArgument(getCalcArguments(calc));
   sign = (getSign(calc));
   return `${firstArgument}${sign}${secondArgument}`
};
*/
