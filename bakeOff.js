const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  const possibleRecipe = [];
  recipes.map((allRecipes) => {
      allRecipes.ingredients.map((recipeIngredient) => {
          bakeryA.map((ingredient) => {
            if (recipeIngredient === ingredient) {
                possibleRecipe.push(ingredient);
            }
          });
          bakeryB.map((ingredient) => {
              if (recipeIngredient === ingredient) {
                  possibleRecipe.push(ingredient);
              }
          });
      });
  });
  const confirmRecipe = (recipes) => {
      recipes.map((allRecipes) => {
          let recipeIngredients = allRecipes.ingredients;
          checker = recipeIngredients.every((v) => possibleRecipe.includes(v));
          if (checker) {
              console.log(allRecipes.name);
          }
      });
  };
  return confirmRecipe(recipes);
};
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