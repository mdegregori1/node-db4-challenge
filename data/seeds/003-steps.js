
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, step_number: 1, step_description: 'grab two pieces of bread',  recipe_id: 1 },
        {id: 2, step_number: 2, step_description: 'grab a knife',  recipe_id: 1},
        {id: 3, step_number: 3, step_description: 'put peanut butter on the knife',  recipe_id: 1},
        {id: 4, step_number: 4, step_description: 'spread the peanut butter on the bread using the knife',  recipe_id: 1},
        {id: 5, step_number: 5, step_description: 'Enjoy!',  recipe_id: 1}
        
      ]);
    });
};
