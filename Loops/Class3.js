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
