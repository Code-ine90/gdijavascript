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

console.log('----- temperature task -----');

// =========== task 1 - if statements ===========

var temperature = 22;

if (temperature < 50) {
  console.log('Remember to put your coat on before you go out, how else will you FUCKING MELT WHEN IT\'S SO FUCKING HOT OUT THERE AT 49 FUCKING DEGREES CELCIUS. JEEZE.');
}

// =========== task 2 - else if ===========

var temp = 27;

if (temp < 50) {
  console.log('Wear a coat *sigh*');
} else if (temp <= 30) {
  console.log('wear a coat and hat, because why not eh. Just melt away. Like the wicked witch of the west, but with sweat and not just water. One sweaty witch.');
} else if (temp <= 0) {
  console.log('Better stay inside, this one I can agree with. Just light the fire and chill out my friend, that\'s all this weather is good for.');
} else {
  console.log('You do you Boo, you do you. Wear what you want and do what you feel, because in this heat no-one else will be around to see it.');
}

// =========== task 3 - logical operators ===========

var tempe = 25;
var areYouMad = true;

if (tempe > 24 && areYouMad == true) {
  console.log('By the gods, you are totally insane. Stop putting on so many layers of warm clothes in this weather!');
} else {
  console.log('I have given up on you entirely, you should not be allowed out in any weather.');
}
