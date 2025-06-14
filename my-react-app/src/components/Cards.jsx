import { useState } from "react";
import CardDetail from "./CardDetail.jsx";

const Cards = ({ pokemonList }) => {
  const [selected, setSelected] = useState(null);

  const onPokemonClick = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setSelected(data);
  };

  return (
    <div className="cards">
      {pokemonList.map((p, index) => (
        <div key={index} className="card" onClick={() => onPokemonClick(p.url)}>
          {p.name}
        </div>
      ))}
      {selected && <CardDetail pokemon={selected} />}
    </div>
  );
};

export default Cards;
