import readlineSync from 'readline-sync';
import balance from './balance';
import even from './even';
import calc from './calc';
import gcd from './gcd';
import progression from './progression';
import prime from './prime';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? \n');
  console.log(`Hello, ${name}!\n`);
  console.log('Choose game:\n');
  console.log('1. Even');
  console.log('2. Calc');
  console.log('3. GreatCommonDivisor');
  console.log('4. Balance');
  console.log('5. Progression');
  console.log('6. Prime');
  console.log('Q. Exit \n');
  const gameChoose = readlineSync.question('Type 1-6 for play or Q for Exit\n');
  switch (gameChoose) {
    case '1': {
      even();
      break;
    }
    case '2': {
      calc();
      break;
    }
    case '3': {
      gcd();
      break;
    }
    case '4': {
      balance();
      break;
    }
    case '5': {
      progression();
      break;
    }
    case '6': {
      prime();
      break;
    }
    case 'Q': {
      console.log(`Goodbye, ${name}! I'll be back ;). \n`);
      return;
    }
    default: {
      console.log('Incorrect! try again next time \n');
    }
  }
};
