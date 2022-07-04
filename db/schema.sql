CREATE DATABASE pokedex_app;
\c pokedex_app

CREATE TABLE favourite_pokemon (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  pokemon_name TEXT,
  pokedex_id INTEGER,
  image_url TEXT
);


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  password_digest TEXT
);

INSERT INTO favourite_pokemon (pokemon_name, pokedex_id, image_url) VALUES ('Bulbasaur', 1, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png');

INSERT INTO favourite_pokemon (pokemon_name, pokedex_id, image_url) VALUES ('Ivysaur', 2, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png');