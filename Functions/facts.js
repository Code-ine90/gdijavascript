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
