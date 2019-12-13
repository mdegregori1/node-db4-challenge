const express = require('express');

const Recipe= require('./recipe-models.js');

const router = express.Router();

router.get('/', (req, res) => {
  Recipe.getRecipes()
  .then(recipes => {
    res.json(recipes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipes' });
  });
});


router.get('/:id/list', (req, res) => {
  const id = req.params.id;
  Recipe.getShoppingList(id)
  .then(id => {
    if(id.length > 0){
      res.status(200).json(id)
    } else {
      res.status(404).json({message: "please enter a valid id"})
    }
  })
  .catch(error => {
    console.log(error)
    res.status(500).json({error: "error getting the recipe by id"})
  })
})


router.get('/:id/steps', (req, res) => {
  const id = req.params.id;
  Recipe.getInstructions(id)
  .then(id => {
    if(id.length > 0){
      res.status(200).json(id)
    } else {
      res.status(404).json({message: "please enter a valid id"})
    }
  })
  .catch(error => {
    console.log(error)
    res.status(500).json({error: "error getting the recipe by id"})
  })
})


module.exports = router;