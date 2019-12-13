
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, step_number: 1, step_description: 'grab two pieces of bread',  recipe_id: 1 },
        {id: 2, step_number: 1, step_description: 'grab a bowl',  recipe_id: 2},
        {id: 3, step_number: 1, step_description: 'grab tuna',  recipe_id: 3}

      ]);
    });
};
