/*//////////////////////////////////////////////////////////////
                               FUNCTIONS

2 step process
  1. Define
  2. Run  
  
  SYNTAX:
   function funcName() {
    do something here
   }
//////////////////////////////////////////////////////////////*/

// Define
function sing() {
  console.log('Do');
  console.log('Re');
  console.log('Mi');
}

// Run
sing();


// Arguments
/////////////////////

function greet(person) { // Parameter
  console.log(`Hi, ${person}`);
}

greet('Darryl'); // Argument

// Output: Hi, Darryl

// function rant(message) {
//   console.log(message.toUpperCase());
// }

function repeat(str, numTimes) {
  let result = '';
  for ( let i = 0; i < numTimes; i++) {
    result += str;
  }
  console.log(result);
}

repeat('$', 5);

// Output:
// $$$$$

// RETURNING
function add(x, y) {
  let sum = x + y;
  return sum;
}


// Last Element Exercise

function lastElement(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
        return null;
    }
    // Return the last element of the array
    return arr[arr.length - 1];
}

// Example usage:
console.log(lastElement([1, 2, 3, 4]));  // Outputs: 4
console.log(lastElement(['a', 'b', 'c']));  // Outputs: 'c'
console.log(lastElement([]));  // Outputs: null



/*
Capitalize Exercise
Define a function called capitalize that accepts a string argument and returns a new string with the first letter capitalized (but the rest of the string unchanged).  For example:

capitalize('eggplant') // "Eggplant"
capitalize('pamplemousse') // "Pamplemousse"
capitalize('squid') //"Squid"
*/  

function capitalize(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}
console.log(capitalize('darryl'));
/*
Explanation:
str.slice(0, 1).toUpperCase(): This capitalizes the first letter of the string.
str.slice(1): This returns the rest of the string starting from the second character to the end.
The + operator concatenates the capitalized first letter with the rest of the string.
So, the function now returns the entire string with the first letter capitalized.
*/



/*
Days Of The Week Exercise
Write a function called returnDay. this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Monday, 2 is Tuesday, etc.)  If the number is less than 1 or greater than 7, the function should return null. In some countries Sunday is treated as the first day of the week, but for this exercise we will use Monday as the first day.

Hint: store the days of the week in an array, or use an object with numerical keys.  When the function is called, plug the number into the array/object you've created to retrieve the corresponding day name and then return that value.

returnDay(1) // "Monday"
returnDay(7) // "Sunday"
returnDay(4) // "Thursday"
returnDay(0) // null
*/

function returnDay(num) {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    // Check if the number is within the valid range
    if (num < 1 || num > 7) {
        return null;
    }

    // Return the corresponding day (adjust for zero-based index)
    return daysOfWeek[num - 1];
}

// Example usage:
returnDay(1); // Outputs: "Monday"
returnDay(3); // Outputs: "Wednesday"
returnDay(7); // Outputs: "Sunday"
returnDay(0); // Outputs: null
returnDay(8); // Outputs: null

/*
Explanation:
daysOfWeek Array: This array contains the days of the week starting from Monday to Sunday.
Input Validation: The function checks if the input num is less than 1 or greater than 7. If so, it returns null.
Index Adjustment: The input number is adjusted by subtracting 1 to match the zero-based index of the array (daysOfWeek[num - 1]).
Returns the corresponding day: If the input is valid, the function returns the day of the week from the array.
This function works as expected, returning the correct day for valid inputs and null for invalid ones.
*/


/*//////////////////////////////////////////////////////////////
                              FUNCTIONS 102

Function Scope
Block Scope
Lexical Scope
Function Expressions
Returning Functions *
Keyword "this" *
Adding Methods To Objects                              
//////////////////////////////////////////////////////////////*/

// SCOPE
// Variable visibility - The location where a variable is defined dictates where we have access to that variable
//////////////////

const creature = "Sea Dragon";

function scubaDive() {
  const creature = "Dancer";
  console.log(creature);
}
scubaDive();

// HIGHER ORDER FUNCTIONS
// Functions that operate on/with other functions
// They can:
//    * Accept other functions as arguments
//    * Return a function
////////////////////////////////////////
function callTwice(func) {
  func();
  func();
}

function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

callTwice(rollDie); 
// Do not pass rollDie like rollDice(), you want to pass in the value of rollDie into callTwice
// and not execute rollDie inside of callTwice

function callTenTimes(f) {
  for( let i = 0; i < 10; i++) {
    f()
  }
}
console.log(rollDie); // Will print rollDie value 10 times

// RETURN A FUNCTION

function makeMysteryFunc() {
  const rand = Math.random();
  if (rand > 0.5) {
    return function() {
      console.log('CONGRATS, I AM A GOOD FUNCTION!');
    }
  } else {
    return function() {
      alert('You\'ve been affected by a computer virus!' );
    }
  }
}

// Make a function that tells if a number is between 50 & 100
function isBetween(num) {
  return num >= 50 && num <= 100;
}

// Make a function that tells if a number is between 1 & 10
function isBetween(num) {
  return num >= 1 && num <= 10;
}

// FACTORY FUNCTION

function makeBetweenFunc(min, max) {
  return function(num) {
    return num >= min && num <= max;
  }
}
makeBetweenFunc(100, 200) // 