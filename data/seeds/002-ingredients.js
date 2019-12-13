
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'tuna'},
        {id: 2, ingredient_name: 'peanut butter'},
        {id: 3, ingredient_name: 'milk and cereal'},
        {id: 4, ingredient_name: 'bread'},
      ]);
    });
};
