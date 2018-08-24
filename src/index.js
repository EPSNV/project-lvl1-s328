import {
  red, inverse, green, yellow, bold,
} from 'colors';

import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const numberRightAnswer = 3;

export default (questionAnswerGenerator, description) => {
  console.log(inverse('\nWelcome to the Brain Games!\n'));
  console.log(yellow(description));
  const name = bold(readlineSync.question('\nMay I have your name?\n'));
  console.log(green(`\nHello, ${name}!\n`));
  for (let i = 0; i < numberRightAnswer; i += 1) {
    const questionAnswer = questionAnswerGenerator();
    const question = car(questionAnswer);
    const rightAnswer = cdr(questionAnswer);
    console.log(yellow('Questions'), `${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === rightAnswer) {
      console.log(green('Correct!\n'));
    } else {
      console.log(red(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`));
      console.log(red(`Let's try again, ${name}! \n`));
      return;
    }
  }
  console.log(green(`Congratulations, ${name}! \n`));
};
