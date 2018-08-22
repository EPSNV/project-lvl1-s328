import { random, makeQuestionAnswer, game } from '..';

const checkGCD = (a, b) => {
  let i = (a < b) ? a : b;
  while (i > 0) {
    if ((a % i === 0) && (b % i === 0)) break;
    i -= 1;
  }
  return i;
};
const generate = () => {
  const firstArgument = random(2, 100);
  const secondArgument = random(2, 100);
  const greatCommonDivisor = checkGCD(firstArgument, secondArgument);
  return makeQuestionAnswer(`${firstArgument} ${secondArgument}`, `${greatCommonDivisor}`);
};

export default () => game(generate, 'Find the greatest common divisor of given numbers');
