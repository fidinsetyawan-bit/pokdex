import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export const PokemonDetailPage = () => {
  const { name } = useParams(); // Mengambil 'name' dari URL /pokemon/:name
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemonDetail = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    setPokemon(data);
  };

  useEffect(() => {
    fetchPokemonDetail();
  }, [name]); // Efek ini akan berjalan lagi jika 'name' berubah

  // Tampilkan pesan loading jika data belum siap
  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <Link to="/">&larr; Kembali ke Daftar</Link>
      <h1 style={{ textTransform: 'capitalize' }}>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} style={{ width: '200px' }} />
      <h3>Tipe:</h3>
      {pokemon.types.map((typeInfo) => (
        <span key={typeInfo.type.name} style={{ margin: '0 5px' }}>{typeInfo.type.name}</span>
      ))}
    </div>
  );
};