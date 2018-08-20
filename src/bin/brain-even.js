#!/usr/bin/env node
import { hello, isEven } from '..';


const numOfRightAnswers = 3;
console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');
hello();
console.log(`${isEven(numOfRightAnswers)}`);
