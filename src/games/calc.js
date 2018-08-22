import random from '../utils';
import { cons } from 'hexlet-pairs';
import game from '..';

const generate = () => {
  const firstArgument = random();
  const secondArgument = random();
  const sign = random(0, 3);
  switch (sign) { // вот тут мне не нравится, но пока не придумал как упростить.
    case 0: return cons(`${firstArgument}+${secondArgument}`, `${firstArgument + secondArgument}`);
    case 1: return cons(`${firstArgument}-${secondArgument}`, `${firstArgument - secondArgument}`);
    case 2: return cons(`${firstArgument}*${secondArgument}`, `${firstArgument * secondArgument}`);
    default: return undefined;
  }
};

export default () => game(generate, 'What is the result of the expression?');
