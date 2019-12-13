
exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments()
        tbl.string('recipe_name', 128).notNullable()
    })
    .createTable('ingredients', tbl => {
        tbl.increments()
        tbl.string('ingredient_name', 128).notNullable()
    })
    .createTable('steps', tbl => {
        tbl.increments()
        tbl.integer('step_number')
            .notNullable()
        tbl.string('step_description', 128)
            .notNullable()
            .unique()
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
    })
    .createTable('recipe_ingredients', tbl => {
        tbl.float('quantity')
            .notNullable()
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
        tbl.primary(['recipe_id', 'ingredient_id'])
    })
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};

