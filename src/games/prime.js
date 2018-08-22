import random from '../utils';
import { cons } from 'hexlet-pairs';
import game from '..';


const isPrime = (number) => {
  for (let i = 2; i * i <= number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generate = () => {
  const question = random(2, 5);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => game(generate, 'Answer "yes" if this number prime otherwise answer "no".');
