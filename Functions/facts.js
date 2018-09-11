// parrotFacts function created
function parrotFacts() {
  console.log('Some parrot species can live for over 80 years');
  console.log('Kakapos are a critically endangered flightless parrot');
}

// Call parrotFacts function
parrotFacts()

// Arguments - Functions can accept input values called arguments.

function callKitten(kittenName) {
  console.log('Come here, ' + kittenName + '!');
}

// Call the function callKitten and add the argument 'Fluffy'. An argument seems to be similar to a variable, maybe you could use a variable as an argument?

callKitten('Fluffy'); // Outputs 'Come here, Fluffy!' 

// Number function

function addNumbers(a, b) {
  console.log(a + b);
}

// This calls the function addNumbers, with the arguments a and b, when the function is called below, each time it is called it uses the numbers in the brackets as values for the arguments.

addNumbers(5, 7); // Outputs the value 12
addNumbers(9, 12); // Outputs the value 21

// Passing variables into functions. These variables do not need to have the same name as the functions

function addOne(num) {
  var newNumber = num + 1;
  console.log('You now have ' + newNumber);
}

// Declare variables
var numberOfKittens = 5;
var numberOfPuppies = 4;

// Use them in functions
addOne(numberOfKittens);
addOne(numberOfPuppies);

// Make some changes and you get
function addOne(num) {
  var newNumber = num + 1;
  console.log('You now have ' + newNumber);
}

// Declare variables
var numberOfKittens = 5;
var numberOfPuppies = 4;

// Use them in functions
console.log('You had ' + numberOfKittens + ' kittens');
addOne(numberOfKittens);
console.log('You had ' + numberOfPuppies + ' puppies')
addOne(numberOfPuppies);

// Task - Write a simple program to combine a first name and a last name inside a function.

function fullName() {
  var firstName = 'Stuart';
  var lastName = 'White';

  console.log(firstName + ' ' + lastName);
}

fullName();

// Then update the function to accept a first and last name as arguments.

function fullName2(firstName2, lastName2) {
  console.log(firstName2 + ' ' + lastName2);
}

fullName2('Stuart', 'White');

// Returning values. You can have a function give you back a value to use later. Return will immediately end a function.

function square(num) {
  return num * num;
}

console.log(square(4)); // Outputs '16'

var squareOfFive = square(5); // The variable squareOfFive equals '25'. Let's output this in the console.

console.log(squareOfFive);

// The scope of a variable determines where it's value is accessible throughout your program. A variable outside a function has a global scope, and can be accessed anywhere, even inside functions.

var awesomeGroup = 'Girl Develop It'; // Global Scope Variable.

function whatIsAwesome() {
  console.log(awesomeGroup + ' is pretty awesome'); // Using a global scope variable inside a function
}

whatIsAwesome();

// Variables that are declared within a function have local scope and can only be accessed within that function.

function whatIsAwesome2() {
  var awesomeGroup2 = 'Girl Develop It'; // Local scope variable
  console.log(awesomeGroup2 + ' seems rather neat');
}

whatIsAwesome2();
// console.log(awesomeGroup2 + ' seems rather neat');
// This wont work as the scope of the variable is local and is not being called in it's parent function

// Boolean variables - These represent logical values true and false.

var dogsAreBest = true;
var catsAreCool = false;

console.log(dogsAreBest);

// Some values are considered 'falsy' and will evaluate to 'false' in a boolean context. Examples of these are 0, null, NaN and ''. Everything else will evaluate as true when converted to a boolean.

// Control Flow

// if statements - are used to decide which lines of code to execute based on conditions

// if (condition) {
//   statements to execute
// }

var age = 30;

if (age > 18) {
  console.log('You are more likely to be an adult!');
}

// a ==
// b - equal, is true if a is equal to b, can be different types
//
// a ===
// b - identical, is true if a is equal to b, and the same type
//
// a !=
// b - not equal, true if a is not equal to be, can be different types
//
// a !==
// b - not identical, true if a is not equal to b, or they are not the same type
//
// a < b - less that, true if a is stricly less than b
//
// a > b - greater than, true is a is stricly greater than b
//
// a <= b - true if a is less than or equal to b
//
// a >= b - greater than or equal to, true if a is greater than or equal to b

// Don't mix up =, == and ===

// else statement - the else provides a set of alternate instructions

var age2 = 28;

if (age2 >= 16) {
  console.log('Woo, you can do 16 year old stuff!');
} else {
  console.log('Sorry ol\' buddy, ol\' pal, but you gots another ' + (16 - age2) + ' years until you can do 16 year old stuff. Maybe one day, if you make it that far *Evil orchestral music plays*');
}

// If you have multiple conditions you can use the else if statement

var age3 = 28;

if (age3 >= 35) {
  console.log('You are 35 or over! Woo!');
} else if (age3 >= 30) {
  console.log('You are aged 30 - 34, nice. You made it this far, keep on truckin\'!');
} else if (age3 >= 18) {
  console.log('You are 18 or over, just going to assume you are out of school and that\'s pretty darn cool, welcome to the real world. Hope you\'re ready!');
} else {
  console.log('You are so damn young, you don\'t know how lucky you are, yadda yadda old person talk. Seriously though, make the most of the free resources you have at your disposal and never be afraid to do something. Advice I wish I had when I was young enough to make use of it, and the hope that I would have been smart enough to listen.');
}

// Logical operators

// a && b - and - true if both a and b are true
// a || b - or - true if either a or b is true
// !a - not - true if a is not true...

var age4 = 30;
var yearsAsCitizen = 30;

if (age4 >= 30 && yearsAsCitizen > 9) {
  console.log('If you are American you can run for your countries senate, neat right?');
} else {
  console.log('If this is America, then you are not eligable to run for the senate. Sad face.');
}
