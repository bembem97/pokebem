// * Fetch daghan nga pokemon
export const fetchPokemonListApi = async (limit, offset = 0) => {
    try {
        const fetchPokemonApi = await fetch(
            `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        )
        return await fetchPokemonApi.json()
    } catch (error) {
        throw new Error(error)
    }
}

// * Fetch usa ka-pokemon
export const fetchPokemonApi = async (pokemonName) => {
    try {
        const fetchPokemonData = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        )
        const response = await fetchPokemonData.json()
        const { types, name, id, sprites, height, weight } = response

        return {
            id,
            name,
            image: sprites.other["official-artwork"].front_default,
            types,
            height: parseFloat(((height / Math.pow(10, 2)) * 10).toFixed(2)),
            weight: (weight / 2.205).toFixed(2),
        }
    } catch (error) {
        throw new Error(error)
    }
}

// * Fetch type sa mga pokemon
export const fetchPokemonType = async (typeName) => {
    try {
        const fetchPokemonType = await fetch(
            `https://pokeapi.co/api/v2/type/${typeName}`
        )
        const response = await fetchPokemonType.json()
        const { name, pokemon } = response

        return { name, pokemon }
    } catch (error) {
        throw new Error(error)
    }
}
