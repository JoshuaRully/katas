const ingredientCheck = (ingredients, recipes) => {
  let possibleRecipes = [];
  for (let i = 0; i < recipes.length; i++) {
    for (let j = 0; j < ingredients.length; j++) {
      if (recipes[i].ingredients.includes(ingredients[j])) {
        possibleRecipes.push(recipes[i]);
      };
    }
  }
  return possibleRecipes;
}
const chooseRecipe = (bakeryA, bakeryB, recipes) => {
  let bakeryARecipe = ingredientCheck(bakeryA, recipes);
  let bakeryBRecipe = ingredientCheck(bakeryB, recipes);
  let matchingRecipes = [];
  for (let i = 0; i < bakeryARecipe.length; i++) {
    for (let j = 0; j < bakeryBRecipe.length; j++) {
      if (bakeryARecipe[i].name === bakeryBRecipe[j].name) {
        matchingRecipes.push(bakeryARecipe[i]);
      }
    }
  }
  return matchingRecipes[0].name;
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));