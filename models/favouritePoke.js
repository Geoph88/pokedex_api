const db = require('../db/db')

const favouritePoke = {

  findAll: () => {
    const sql = `SELECT * FROM favourite_pokemon`

    return db
    .query(sql)
    .then(dbRes => dbRes.rows)
  },

  create: (pokemon_name, pokedex_id, image_url) => {
    const sql = `
    INSERT INTO favourite_pokemon(pokemon_name, pokedex_id, image_url) VALUES ($1, $2, $3) RETURNING *
    `
  
    return db.query(sql, [pokemon_name, pokedex_id, image_url])
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