import { Link } from "react-router-dom";

export const PokemonCard = ({ name }) => {
  return (
    <Link to={`/pokemon/${name}`}>
      <div style={{ border: '1px solid black', margin: '10px', padding: '10px', textTransform: 'capitalize' }}>
        {name}
      </div>
    </Link>
  );
};