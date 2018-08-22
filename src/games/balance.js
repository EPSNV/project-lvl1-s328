import { random, makeQuestionAnswer, game } from '..';

const sumDigits = (num) => {
  const str = String(num);
  let acc = 0;
  for (let i = 0; i < str.length; i += 1) {
    acc += Number(str[i]);
  }
  return acc;
};

const theEqualizer = (sum, len, acc) => {
  if (len === 0) {
    return acc;
  }
  const digit = Math.floor(sum / len);
  return theEqualizer(sum - digit, len - 1, `${acc}${digit}`);
};

const generate = () => {
  const argument = random(100, 9999);
  const balancedNumber = theEqualizer(sumDigits(argument), String(argument).length, '');
  return makeQuestionAnswer(`${argument}`, `${balancedNumber}`);
};

export default () => game(generate, 'Balance the given number');
