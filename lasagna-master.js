const recipe = {
  sauce: 0.5,
  noodles: 250,
  meat: 150,
  tomatoes: 3,
  onion: 0.5,
};

export function scaleRecipe(recipe, portion) {
  const portionValue = portion / 2;
  if (!portion) return recipe;

  const recipeItems = Object.keys(recipe);
  const scaleValues = Object.values(recipe);
  const calculatePortions = scaleValues.map((item) => item * portionValue);

  const result = {};
  for (let i = 0; i < recipeItems.length; i++) {
    const key = recipeItems[i];
    const value = calculatePortions[i];
    result[key] = value;
  }
  return result;
}

console.log(scaleRecipe(recipe, 6));
