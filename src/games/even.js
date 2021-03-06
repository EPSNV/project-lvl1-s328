import random from '../utils';
import { cons } from 'hexlet-pairs';
import game from '..';

const isEven = number => number % 2 === 0;

const generate = () => {
  const argument = random();
  const answer = isEven(argument) ? 'yes' : 'no';
  return cons(argument, answer);
};

export default () => game(generate, 'Answer "yes" if number even otherwise answer "no".');
