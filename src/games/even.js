import { random, makeQuestionAnswer } from '..';

const isEven = number => number % 2 === 0;

export default () => {
  const argument = random();
  const answer = isEven(argument) ? 'yes' : 'no';
  return makeQuestionAnswer(argument, answer);
};
