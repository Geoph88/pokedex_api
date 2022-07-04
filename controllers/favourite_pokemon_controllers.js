const express = require('express')
const router = express.Router()

const favouritePoke = require('../models/favouritePoke')

router.get('/:userId', (req, res) => {
  const userId = req.session.userId
  favouritePoke.findAll(userId)
  .then(pokemon => res.json(pokemon))
})

router.post('/:userId', (req, res) => {
  const userId = req.session.userId
  const {favouritePokemonName, favouritePokemonImage, favouritePokedexId} = req.body
  console.log(req.session.userId)
  favouritePoke.create(userId, favouritePokemonName, favouritePokedexId, favouritePokemonImage)
  .then(pokemon => res.json(pokemon))
})

router.delete('/:id', (req, res) => {
  const favouritePokemonId = req.params.id

  favouritePoke
  .delete(favouritePokemonId)
  .then(() => res.json({ message: 'deleted successfully '}))
})

module.exports = router