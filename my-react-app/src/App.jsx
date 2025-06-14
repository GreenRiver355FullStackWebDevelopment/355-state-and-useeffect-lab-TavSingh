import "./App.css";
import { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import Cards from "./components/Cards.jsx";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchPokemon();
  }, [page]);

  const fetchPokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=20`);

    const data = await res.json();
    setPokemon(data.results);
  };

  const onClickNext = () => {
    setPage((prev) => prev + 20);
  };

  const onClickBack = () => {
    setPage((prev) => Math.max(prev - 20, 0));
  };

  return (
  <div className="App">
    <h1>Pokémon Explorer</h1>
    <div className="main-container">
      <Cards pokemonList={pokemon} />
      <div className="nb-button">
        <button onClick={onClickBack} disabled={page === 0}>Back</button>
        <button onClick={onClickNext}>Next</button>
      </div>
    </div>
  </div>
);

}

export default App;
