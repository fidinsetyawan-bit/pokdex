import { useState, useEffect } from "react";
import { PokemonCard } from "../components/PokemonCard"; // <-- Impor Card

export const PokemonListPage = () => {
  const [pokemons, setPokemons] = useState([]);

  // ... (kode fetchPokemons tetap sama)
  const fetchPokemons = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    setPokemons(data.results);
  };

  useEffect(() => {
    fetchPokemons();
  }, []);


  return (
    <div>
      <h1>Daftar Pokémon</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} name={pokemon.name} />
        ))}
      </div>
    </div>
  );
};