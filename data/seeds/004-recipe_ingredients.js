
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {quantity: 50.0, recipe_id:1, ingredient_id:4 },
        {quantity: 5.0, recipe_id:1, ingredient_id: 2 }
      ]);
    });
};
