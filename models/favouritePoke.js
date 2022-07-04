const db = require('../db/db')

const favouritePoke = {

  findAll: (id) => {
    const sql = `SELECT * FROM favourite_pokemon WHERE user_id = $1`

    return db
    .query(sql, [id])
    .then(dbRes => dbRes.rows)
  },

  create: (user_id, pokemon_name, pokedex_id, image_url) => {
    const sql = `
    INSERT INTO favourite_pokemon(user_id, pokemon_name, pokedex_id, image_url) VALUES ($1, $2, $3, $4) RETURNING *
    `

    return db.query(sql, [user_id, pokemon_name, pokedex_id, image_url])
    .then(dbRes => dbRes.rows[0])
  },

  delete: (pokemonId) => {
    const sql = `
    DELETE FROM favourite_pokemon WHERE id = $1
    `
    return db.query(sql, [pokemonId])
  }
}

module.exports = favouritePoke