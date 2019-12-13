const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList
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



