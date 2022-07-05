import React, { useState, useEffect } from "react"
import Image from "next/image"

import Typography from "@mui/material/Typography"
import Chip from "@mui/material/Chip"

import Wrapper from "@poke/Wrapper"

function Pokemon({ pokemon }) {
    const [imageSource, setImageSource] = useState(
        pokemon.image || "/pokeball.png"
    )

    const title =
        pokemon.name.charAt(0).toUpperCase() +
        pokemon.name.slice(1) +
        " - Pokemon"

    useEffect(
        () => setImageSource(pokemon.image || "/pokeball.png"),
        [imageSource, pokemon.image]
    )

    return (
        <Wrapper title={title}>
            <Image
                src={imageSource}
                alt={pokemon.name}
                width={425}
                height={425}
                onError={() => setImageSource("/pokeball.png")}
            />

            <Typography variant="subtitle2">{pokemon.id}</Typography>

            <Typography component="h1" sx={{ textTransform: "capitalize" }}>
                {pokemon.name}
            </Typography>

            {pokemon.types.map(({ type }) => (
                <Chip
                    label={type.name}
                    key={type.name}
                    sx={{
                        textTransform: "capitalize",
                    }}
                />
            ))}
        </Wrapper>
    )
}

export default Pokemon

// * Server Side
import { fetchPokemonApi } from "lib/pokemon"

export async function getServerSideProps({ query }) {
    try {
        const name = query.name
        const pokemon = await fetchPokemonApi(name)

        return { props: { pokemon } }
    } catch (error) {
        console.log(error)
    }

    return { notFound: true }
}
