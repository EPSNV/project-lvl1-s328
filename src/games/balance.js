import random from '../utils';
import { cons } from 'hexlet-pairs';
import game from '..';

const theEqualizer = (sum, len, acc) => {
  if (len === 0) {
    return acc;
  }
  const digit = Math.floor(sum / len);
  return theEqualizer(sum - digit, len - 1, `${acc}${digit}`);
};

const balanceNumber = (number) => {
  const str = String(number);
  let sumDigits = 0;
  for (let i = 0; i < str.length; i += 1) {
    sumDigits += Number(str[i]);
  }

  return theEqualizer(sumDigits, str.length, '');
};

const generate = () => {
  const question = random(100, 9999);
  const answer = balanceNumber(question);
  return cons(`${question}`, `${answer}`);
};

export default () => game(generate, 'Balance the given number');
