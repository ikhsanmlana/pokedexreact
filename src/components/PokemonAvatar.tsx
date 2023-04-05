import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { PokemonAttributes } from "../interfaces/pokemon.interface";
import { getColorFromUrl } from "../utils/colors";

interface PokemonAvatarProps {
  pokemon: PokemonAttributes;
}

const PokemonAvatar = ({ pokemon }: PokemonAvatarProps) => {
  return (
    <Card sx={{ backgroundColor: pokemon.color }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ textTransform: "capitalize", color: "white", fontSize: 25 }}
          >
            #{pokemon.id}
          </Typography>
          <CardMedia
            component="img"
            sx={{ height: 300, objectFit: "contain" }}
            image={pokemon.sprites.other["official-artwork"].front_default}
            title={pokemon.name}
          />
          <Typography
            sx={{ textTransform: "capitalize", color: "white", fontSize: 25 }}
          >
            {pokemon.name}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PokemonAvatar;
