// Write a loop that gives you the 9's times table,
// from 9 x 1 = 9 to 9 x 12 = 108.
//
//
// Finish early? Try using a loop inside a loop to write all the times tables, from 1 to 12.
console.log ('The tasks start here...')

var count

for (count = 1; count <= 108; count++) {
  if (count % timeTable === 0) {
    console.log(count);
  }
}
