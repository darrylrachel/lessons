/*//////////////////////////////////////////////////////////////
                         ARRAY CALLBACK METHODS

ForEach (crucial)
Map (crucial)
Arrow Functions (crucial)
Filter (important, but don't stress)
Some & Every (nice to have)
Reduce (nice to have)                   

//////////////////////////////////////////////////////////////*/

/*//////////////////////////////////////////////////////////////
                                FOREACH

Accepts a callback function
Calls the function once per element in the array

Superceded by forOf

//////////////////////////////////////////////////////////////*/

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// nums.forEach( function (n) {
  //console.log(n * n)
  //prints: 81, 64, 49, 36, 25, 16, 9, 4, 1
//});

//nums.forEach( function (el) {
  //if (el % 2 === 0) {
    //console.log(el)
    //prints: 8, 6, 4, 2
  //}
//});

// Better way
/////////////////////
for (let num of nums) {
  console.log(num * num)
}
//prints: 81, 64, 49, 36, 25, 16, 9, 4, 1


/////////////////////////////////////////////////////////

const movies = [
  {
    title: 'Amadeus',
    score: 99
  },
  {
    title: 'Stand By Me',
    score: 85
  },
  {
    title: 'Parasite',
    score: 95
  },
  {
    title: 'Alien',
    score: 90
  }
];

// Goal: Alien - 90/100
movies.forEach( function(movie) {
  console.log(`${movie.title} - ${movie.score}/100`);
})
//prints: Amadeus - 99/100, Stand By Me - 85/100, Parasite - 95/100, Alien - 90/100



/*//////////////////////////////////////////////////////////////
                                  MAP

Creates a new array with the results of calling a callback on every element in the array                                  


//////////////////////////////////////////////////////////////*/

const texts = ['rofl', 'lol', 'omg', 'ttyl'];
const caps = texts.map( function (t) {
  return t.toUpperCase();
})

texts; //prints: ['rofl', 'lol', 'omg', 'ttyl']
caps; //prints: ['ROFL', 'LOL', 'OMG', 'TTYL']


const titles = movies.map( function (movie) {
  return movie.title;
})
//prints: ['Amadeus', 'Stand By Me', 'Parasite', 'Alien']


/*//////////////////////////////////////////////////////////////
                                EXERCISE

Define a variable named firstNames and assign it to the result of mapping over the existing array,
fullNames, so that firstNames contains only the first names of the Harry Potter characters from
the fullNames array.                                
//////////////////////////////////////////////////////////////*/

const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

const firstNames = fullNames.map( function(name) {
  return name.first;
})

console.log(firstNames);
//prints: ['Albus', 'Harry', 'Hermione', 'Ron', 'Rubeus', 'Minerva', 'Severus']


/*//////////////////////////////////////////////////////////////
                            ARROW FUNCTIONS

Arrow functions are a syntactically compact alternative to regular function expressions 

//////////////////////////////////////////////////////////////*/

const square = (x) => {
  return x * y;
}

const sum = (x, y) => {
  return x + y;
}

const divide = () => {
  return divide;
}


// EXPLICIT RETURN
// All these functions fo the same thing
////////////////////////////

const isEven1 = function (num) { // regular function expression
  return num % 2 === 0;
}

const isEven2 = (num) => { // arrow function with parans around param
  return num % 2 === 0;
}

const isEven3 = num => { // arrow function w/o parans around param
  return num % 2 === 0;
}

const isEven4 = num ( // implicit return
  num % 2 === 0
);
const isEven5 = num => num % 2 === 0; // one liner implicit return

// const validUserNames = usernames => // your code here;


/*//////////////////////////////////////////////////////////////
                            EXERCISE

Arrow Function Exercise
Write an arrow function expression called greet.  It should accept a single string argument, representing a person's name.  It should return a greeting string as shown below:

greet("Hagrid") should return this string: Hey Hagrid! 

greet("Luna") should return this string: Hey Luna!

//////////////////////////////////////////////////////////////*/


const greet = (name) => {
  return `Hey ${name}`;
}
//prints: 'Hey Darryl'


/*//////////////////////////////////////////////////////////////
                                 FILTER

Creates a new array with all elements that pass the test implemented by the provided function                                 
//////////////////////////////////////////////////////////////*/

const numbers = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const odds = numbers.filter(n => {
  return n % 2 === 1; 
  // our callback returns true or false
  // if it returns true, n is added to the filtered array
})
//prints: [9, 7, 5, 3, 1]

const smallNumbers = numbers.filter( n => n < 5);

const goodMovies = movies.filter(m => m.score > 80);
const gooTitles = movies.map(m => m.title)

// movies.filter(m => m.score > 80).map(m => m.title);


/*//////////////////////////////////////////////////////////////
                              SOME & EVERY

Every: tests whether all elements in the array pass the provided function. It returns a Boolean value.

Some: similar to every, but returns if ANY of the array elements pass the test function
//////////////////////////////////////////////////////////////*/

// EVERY
//////////////////////
const words = ['dogs', 'dig', 'log', 'bag', 'wag'];

words.every(word => {
  return word.length === 3;
}) // prints: true

words.every(word => word[0] === 'd'); //prints: false

words.every(w => {
  let last_letter = w[w.length - 1];
  return last_letter === 'g'
}) //prints: true


// SOME
////////////////////
const moreWords = ['dogs', 'jello', 'log', 'cupcake', 'bag', 'wag'];

// Are there any words longer than 4 characters
moreWords.some(word => {
  return word.length > 4;
}) // prints: true

// Do any words start with 'z
moreWords.some(word => word[0] === 'Z'); //prints: false

// Do any words contain 'cake'
moreWords.some(w => {
  let last_letter = w.includes('cake');
}) //prints: true