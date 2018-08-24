import { red, inverse, yellow } from 'colors';
import readlineSync from 'readline-sync';
import balance from './balance';
import even from './even';
import calc from './calc';
import gcd from './gcd';
import progression from './progression';
import prime from './prime';
import hexletTest from './hexlet-test';

const chooseGame = () => {
  console.log(yellow('Choose game:\n'));
  console.log('  1. Even');
  console.log('  2. Calc');
  console.log('  3. GreatCommonDivisor');
  console.log('  4. Balance');
  console.log('  5. Progression');
  console.log('  6. Prime');
  console.log('  7. Hexlet-test');
  console.log('  Q. Exit \n');
  const gameChoose = readlineSync.question(yellow('Type 1-7 for play or Q for Exit\n'));
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
    case '7': {
      hexletTest();
      break;
    }
    case 'Q': {
      return;
    }
    default: {
      console.log(red('\nIncorrect! try again \n'));
    }
  }
  chooseGame();
};

export default () => {
  console.log(inverse('Welcome to the Brain Games!\n'));
  chooseGame();
  console.log(red('\nGoodbye! See you soon ;). \n'));
};
