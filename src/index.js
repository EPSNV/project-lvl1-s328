import readlineSync from 'readline-sync';

export default message => console.log(`Hello, ${readlineSync.question(message)}!`);
