// import './utils.js';
import minus, { square, add } from './utils.js'
import isSenior, { isAdult, canDrive } from './person';

console.log('app.js is running.');
console.log(square(4));
console.log(add(100, 1));
console.log(minus(100, 45)); // reference to substract function in utils.js

console.log(isAdult(10) ? 'Hello Man!' : 'Watsuup Kid?');
console.log(canDrive(17) ? 'Have a nice drive' : 'Sorry, another time kids');
console.log(isSenior(37) ? 'Masta' : 'Newbie');
