import { random, makeQuestionAnswer } from '..';

export default () => {
  const firstArgument = random();
  const secondArgument = random();
  const sign = random(0, 3);
  switch (sign) { // вот тут мне не нравится, но пока не придумал как упростить.
    case 0: return makeQuestionAnswer(`${firstArgument}+${secondArgument}`, `${firstArgument + secondArgument}`);
    case 1: return makeQuestionAnswer(`${firstArgument}-${secondArgument}`, `${firstArgument - secondArgument}`);
    case 2: return makeQuestionAnswer(`${firstArgument}*${secondArgument}`, `${firstArgument * secondArgument}`);
    default: return undefined;
  }
};
