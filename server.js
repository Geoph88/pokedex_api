const express = require('express')
const app = express()
const port = process.env.PORT || 3001

// controllers
const favouritePokemonController = require('./controllers/favourite_pokemon_controllers')
const usersController = require('./controllers/users_controller')

app.listen(port, () => console.log(`server is listening on port: ${port}`))

app.use(express.json())

app.use('/api/favouritePokemon', favouritePokemonController)
app.use('/api/users', usersController)

if (process.env.NODE_ENV === 'production') {
  const path = require('path')
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}