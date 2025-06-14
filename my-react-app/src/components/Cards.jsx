import { useState } from "react";
import CardDetail from "./CardDetail";
import { Box, Button } from "@mui/material";

const Cards = ({ pokemonList }) => {
  const [selected, setSelected] = useState(null);

  const onPokemonClick = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setSelected(data);
  };

  return (
    <div>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          backgroundColor: "#222",
          gap: 1.5,
          padding: 3,
          borderRadius: 3,
          maxWidth: "750px",
          margin: "0 auto",
        }}
      >
        {pokemonList.map((p, index) => (
          <Button
            key={index}
            onClick={() => onPokemonClick(p.url)}
            sx={{
              backgroundColor: "#444",
              color: "white",
              "&:hover": {
                backgroundColor: "#666",
              },
            }}
          >
            {p.name.charAt(0).toUpperCase() + p.name.slice(1)}
          </Button>
        ))}
      </Box>

      {selected && <CardDetail pokemon={selected} />}
    </div>
  );
};

export default Cards;
