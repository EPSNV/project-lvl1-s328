import random from '../utils';
import { cons } from 'hexlet-pairs';
import game from '..';

const generate = () => {
  const step = random(1, 10);
  const numberHiddenElement = random(1, 9);
  const startElement = random(1, 20);
  const progressionLenght = 10;
  const answer = step * numberHiddenElement + startElement;
  const iter = (count, acc) => {
    if (count === 0) {
      return acc;
    }
    if (count === numberHiddenElement) {
      return iter(count - 1, `.. ${acc}`);
    }
    return iter(count - 1, `${count * step + startElement} ${acc}`);
  };
  const question = iter(progressionLenght, '');
  return cons(question, `${answer}`);
};

export default () => game(generate, 'What number is missing in this progression?');
