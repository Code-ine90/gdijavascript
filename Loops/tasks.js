// Write a loop that gives you the 9's times table,
// from 9 x 1 = 9 to 9 x 12 = 108.
//
//
// Finish early? Try using a loop inside a loop to write all the times tables, from 1 to 12.
console.log ('The tasks start here...');
console.log('Task One');

var count;

for (count = 1; count <= 108; count++) {
  if (count % 9 === 0) {
    console.log(count);
  }
}

// Create an object to hold information on your favorite recipe. It should have properties for:
//
// recipeTitle (a string)
// servings (a number)
// ingredients (an array of strings)
// directions (a string)
//
//
// Try displaying some information about your recipe.
//
// Bonus: Create a loop to list all the ingredients.

console.log('Task Two');

var favouriteRecipe = {
  recipeTitle: 'Caramac Cheesecake',
  servings: 1,
  ingredients: ['- caramac bars', '- cheese', '- cake'],
  directions: 'Put the ingredients into a bowl and make it, then cool in fridge until you are hungry, then eat, then wash up, then start again.',
  eat: function(recipeTitle) {
    console.log('Now, get cookin\' and eat some ' + recipeTitle);
  }
}

var ingredients = favouriteRecipe.ingredients;

console.log('How to make: ' + favouriteRecipe.recipeTitle);
console.log('servings: ' + favouriteRecipe.servings);
console.log('The ingredients are:');
for (i = 0; i < ingredients.length; i++ ) {
  console.log(ingredients[i]);
}
console.log('Cooking instructions: ' +  favouriteRecipe.directions);
favouriteRecipe.eat(favouriteRecipe.recipeTitle);
