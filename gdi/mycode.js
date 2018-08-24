 // Variable input

var numberOfKittens = 5;
var numberOfPuppies = 12;
var myThirdHelloWorld = "This is my third Hello World!";
var kittensName = 'Fluffy ';
var fullName = kittensName + 'McDougal'; // Outputs Fluffy McDougal
var secondKittensName = 'Admiral ';
secondKittensName += 'Snuggles';
// You can use concatonation to mix strings and numbers, Js will treat the number like a string.
var numberOfFruit = 6;
var typeOfFruit = 'bananas';
var allTheFruit = 'I have ' + numberOfFruit + ' ' + typeOfFruit + '!';

// Variable Types
// String - var userName = "Jane Lane";
// Number - var myAge = 30;
// Boolean - var catsAreBest = false;
// Undefined - var favouriteThings;
// Null - var goodPickUpLines = null;

// Numbers can be integers or floats (decimals), JS automatically converts integers to floats. NaN stands for Not-a-Number.

// Arithmetic Operators
// -a - Negation, opposite of a
// a + b - Addition, sum of a and b
// a - b - Subtraction, difference of a and b
// a * b - Multiplication, product of a and b
// a / b - Division, quotient of a and b
// a % b - Modulus, remainder of a divided by b

// + is the concatonation operator, this allows you to put strings together, see line 7.
// += is another operator that can be used to add something to the end of a string. See line 9.

// Main section of code

console.log('I\'d like to use an apostraphe here');
// alert('Hello World');
console.log('Secret Message');
document.write('This is my second Hello World message!  ');
// alert('this is a popup message');
document.write(numberOfKittens);
console.log(myThirdHelloWorld);
document.write("Number of Animals: ");
document.write(numberOfKittens + numberOfPuppies);
console.log(fullName);
console.log(secondKittensName); // Outputs 'Admiral Snuggles'
console.log(allTheFruit);
// secret comment
