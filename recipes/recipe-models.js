const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes');
}



function getShoppingList(id) {
    return db('ingredients as i')
        .where({recipe_id:id})
        .join('recipe_ingredients as r', 'i.id', 'r.ingredient_id')
        .select('i.ingredient_name', 'r.quantity')
}


function getInstructions(id) {
    return db('steps as s')
        .where({recipe_id:id})
        .join('recipes as r', 's.recipe_id', 'r.id')
        .select('s.step_number', 's.step_description')
}



