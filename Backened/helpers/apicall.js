export const searchPokemonByHeightWeight = async (height, weight) => {
    let matchingPokemon = [];

    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
    const data = await response.json();

    for (const [index, pokemon] of data.results.entries()) {
        const pokemonResponse = await fetch(pokemon.url);
        const pokemonData = await pokemonResponse.json();

        const pokemonHeight = pokemonData.height;
        const pokemonWeight = pokemonData.weight;

        if (pokemonHeight <= height && pokemonWeight <= weight) {
            matchingPokemon.push({ name: pokemonData.name,index: index });
        }
        if (matchingPokemon.length >= 5) {
            break; // Exit the loop if we already have 10 matching Pokémon
        }
    }

    return matchingPokemon;
};

// Example usage:
// const height = 4;
// const weight = 100;
// searchPokemonByHeightWeight(height, weight).then(matchingPokemon => {
//     console.log(matchingPokemon);
// });