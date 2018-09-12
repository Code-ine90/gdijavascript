var bottlesOfBeer = 99;

while (bottlesOfBeer > 0) {
  console.log(bottlesOfBeer + ' bottles of beer on the wall!');
  bottlesOfBeer = bottlesOfBeer - 1;
}

// while loops will repeat the same code over and over until a condition is met. In this case, the variable for bottlesOfBeer drops to 0.


// for loops are very similar, but you declare a counter in the statement.

for (var i = 1; i <= 10; i++) {
  console.log(i);
}

// you can add other statements or logical operators inside loops

for (var i2 = 1; i2 <= 100; i2++) {
  if (i2 % 3 === 0) {
    // Says fizz after multiples of three
    console.log(i2 + ' fizz');
  }
  else if (i2 % 5 === 0) {
    // Says buzz after multiples of five
    console.log(i2 + ' buzz');
  }
  else {
    console.log(i2);
  }
}

// to exit a loop you use the break statement

// count from 100 to 200
for (var i3 = 100; i3 <= 200; i3++) {
  console.log('Testing ' + i3);

  //stop at the first multiple of 7
  if (i3 % 7 === 0) {
    console.log('Found it! ' + i3);
    break;
  }
}

// Arrays - arrays are ordered lists of values

// var arrayName = [value0, value1];

// Arrays can have different types of data in them, and they can be mixed

// the length property can tell you how many things there are in an array

var rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

console.log(rainbowColors.length);

// You can access items with bracket notation by using the position of the item you want.

var firstColor = rainbowColors[0];
var lastColor  = rainbowColors[6];

console.log(firstColor + ' and ' + lastColor);

// JS arrays are zero-indexed, so counting starts at 0.

// You can use bracket notation to change an item in an array.

var myFavouriteThings = ['Broccoli', 512, 'Critical Role'];

console.log(myFavouriteThings);
console.log('Updating incorrect entry...')

myFavouriteThings[0] = 'Caramac Cheesecake';

console.log(myFavouriteThings);

// Arrays do not have a fixed length. You can use push to add something to an array.

myFavouriteThings.push('Reading');

console.log(myFavouriteThings);

// You can use a for loop to easily work with each item in an array.

for (var i = 0; i < rainbowColors.length; i++) {
  console.log(rainbowColors[i]);
}

// Objects - Objects let us store a collection of properties.
