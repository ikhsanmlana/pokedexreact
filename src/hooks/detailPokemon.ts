import { useEffect, useState } from "react";
import { httpClient } from "../api/httpClient";
import { POKEMON_API_POKEMON_URL } from "../constants";
import { PokemonAttributes } from "../interfaces/pokemon.interface";
import { getColorFromUrl } from "../utils/colors";

interface DetailPokemonProps {
    pokemonName: string | undefined;
}

const useDetailPokemon = ({ pokemonName }: DetailPokemonProps) => {
    const [pokemon, setPokemon] = useState<PokemonAttributes | null>(null);
    const [isLoading, setIsLoading] = useState(false); 

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // const [pokemonColor, setPokemonColor] = useState<string | null>(null);

    useEffect(() => {
        if (pokemonName){
            fetchPokemon();     
        }
    }, [pokemonName]);

    useEffect(() => {
        if (pokemon){
            getPokemonColor();
        } 
      }, [pokemon]);
    
    const getPokemonColor = async () => {
    if (pokemon?.sprites?.other["official-artwork"]?.front_default) {
        const color = await getColorFromUrl(
        pokemon.sprites.other["official-artwork"].front_default
        );
        if (color) setPokemon({...pokemon,color});
    }
    };

    const fetchPokemon = async() => {
        if(pokemonName) {
            setIsLoading(true)
            const url = `${POKEMON_API_POKEMON_URL}/${pokemonName}`; 
            const result = await httpClient.get<PokemonAttributes>(url);
            if (result?.data){
                setPokemon(result.data);
            }
            setIsLoading(false);
        }
    };

    return {
        pokemon, 
        isLoading
    };
};

export default useDetailPokemon