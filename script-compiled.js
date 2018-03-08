'use strict';

var firstWord = 'Hello',
    secondWord = 'World',
    grades = [1, 5, 5, 5, 4, 3, 3, 2, 1],
    names = [1, 4, 'Iwona', false, 'Nowak'];

var a = void 0,
    b = void 0,
    x = void 0,
    y = void 0;

function sayHelloTo(firstWord, secondWord) {
  console.log(firstWord + ' ' + secondWord + '!');
};

sayHelloTo(firstWord, secondWord);

var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};

console.log(multiply(3));

var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var result = args.reduce(function (x, y) {
    return x + y;
  });
  return result / args.length;
};

console.log(average(1, 2, 3));

console.log(average.apply(undefined, grades));

var firstName = names[2],
    lastName = names[4];


console.log(firstName, lastName);
