console.log('===================================');
console.log('Task will start here');

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

// Add a return statement to your 'name' function. Use that function to set the value of a variable.

function name() {
  var firstName3 = 'Graeme';
  var lastName3 = 'Watt'

  return firstName3 + ' ' + lastName3;
}

var completeName = name();

console.log(completeName);
