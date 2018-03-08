const firstWord = 'Hello',
      secondWord = 'World',
      grades = [1, 5, 5, 5, 4, 3, 3, 2, 1],
      names = [1, 4, 'Iwona', false, 'Nowak'];

let
    a,b,x,y;

function sayHelloTo(firstWord, secondWord) {
  console.log(`${firstWord} ${secondWord}!`);
};


sayHelloTo(firstWord, secondWord);


let multiply = (a, b=1) => {return a * b};


console.log(multiply(3));


const average = (...args) => {
  const result = args.reduce( (x, y) => {return x + y} );
  return result/args.length;
};



console.log (average(1,2,3));



console.log(average(...grades));


const [, , firstName, ,lastName] = names;

console.log(firstName, lastName);
