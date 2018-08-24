import random from '../utils';
import * as fs from 'fs';
import { cons } from 'hexlet-pairs';
import game from '..';

const str = fs.readFileSync('./txt/hexlet-test', 'utf8');
const questionAnswerBase = str.split('#');
const baseLenght = questionAnswerBase.length;

const generate = () => {
  const numberQuestion = random(0, Math.floor(baseLenght / 2)) * 2;
  const question = questionAnswerBase[numberQuestion];
  const answer = questionAnswerBase[numberQuestion + 1];
  return cons(question, answer);
};

export default () => game(generate, 'Choose right answer, type "a", "b", "c" or "d"');
