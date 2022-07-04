const express = require('express')
const router = express.Router()

const favouritePoke = require('../models/favouritePoke')

router.get('/', (req, res) => {
  favouritePoke.findAll()
  .then(pokemon => res.json(pokemon))
})

router.post('/', (req, res) => {
  const {favouritePokemonName, favouritePokemonImage, favouritePokedexId} = req.body
  
  favouritePoke.create(favouritePokemonName, favouritePokedexId, favouritePokemonImage)
  .then(pokemon => res.json(pokemon))
})

router.delete('/:id', (req, res) => {
  const favouritePokemonId = req.params.id

  favouritePoke
  .delete(favouritePokemonId)
  .then(() => res.json({ message: 'deleted successfully '}))
})

module.exports = router