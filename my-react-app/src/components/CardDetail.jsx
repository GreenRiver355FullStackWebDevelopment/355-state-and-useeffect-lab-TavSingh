import { Box, Typography } from "@mui/material";

const CardDetail = ({ pokemon }) => {
  if (!pokemon) return null;

  return (
    <Box
      sx={{
        backgroundColor: "#e0e0e0",
        color: "#333",
        borderRadius: 3,
        paddingTop: 4,
        paddingBottom: 4,
        mt: 5,
        maxWidth: "300px",
        mx: "auto",
        textAlign: "center",
      }}
    >
      <Typography variant="h5" sx={{ color: "#b89b2b" }}>
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </Typography>

      <img
        src={pokemon.sprites?.front_default}
        alt={pokemon.name}
        style={{ marginTop: "16px" }}
      />

      <Typography sx={{ pt: 2 }}>Height: {pokemon.height}</Typography>
      <Typography sx={{ pt: 2 }}>Weight: {pokemon.weight}</Typography>
      <Typography sx={{ pt: 2 }}>
        Base Experience: {pokemon.base_experience}
      </Typography>
      <Typography sx={{ pt: 2 }}>
        Types: {pokemon.types.map((t) => t.type.name).join(", ")}
      </Typography>
    </Box>
  );
};

export default CardDetail;
