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
