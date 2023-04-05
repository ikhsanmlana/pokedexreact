import { Box, Button, Container, Grid } from '@mui/material'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useDetailPokemon from '../hooks/detailPokemon'
import PokemonAvatar from './PokemonAvatar'
import PokemonBasicInfo from './PokemonBasicInfo'

const PokemonDetail = () => {
  let {pokemonName} = useParams()
  
  const {pokemon, isLoading} = useDetailPokemon({pokemonName})

  return (
    <Container>
        <Grid container flexDirection={"column"} alignItems="center" justifyContent="center" spacing={2} mt={1}>
            <Grid container flexDirection={"column"} alignItems="center" justifyContent="center" spacing={2}>
                {isLoading ? (
                    <Box>Loading</Box>
                ) : pokemon ? (
                    <>
                        <Grid item xs={12} sm={6}>
                            <PokemonAvatar pokemon={pokemon} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <PokemonBasicInfo pokemon={pokemon} />
                        </Grid>
                    </>
                ) : (
                    <Box> Pokemon not found</Box>
                )}
            </Grid>
            <Grid item>
                <Button component={Link} to={"/"} variant="contained">
                    Back
                </Button>
            </Grid>
        </Grid>
    </Container>
  )
}

export default PokemonDetail