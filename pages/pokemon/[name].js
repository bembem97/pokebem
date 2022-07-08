import React, { useState, useEffect } from "react"
import Image from "next/image"

import Typography from "@mui/material/Typography"
import Chip from "@mui/material/Chip"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"

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
            <Box display="grid" justifyItems="center">
                <Card
                    sx={{
                        width: "min(100%, 900px)",
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(280px, 1fr))",
                    }}
                >
                    {/* //* Pokemon Image */}
                    <CardMedia image={"/vectors/background.svg"}>
                        <Box>
                            <Image
                                src={imageSource}
                                alt={pokemon.name}
                                width={425}
                                height={425}
                                onError={() => setImageSource("/pokeball.png")}
                            />
                        </Box>
                    </CardMedia>

                    {/* //* Pokemon Info */}
                    <CardContent>
                        <Typography
                            component="h1"
                            variant="h3"
                            sx={{ textTransform: "capitalize" }}
                        >
                            {pokemon.name}
                        </Typography>

                        {pokemon.types.map(({ type }) => (
                            <Chip
                                color={type.name}
                                label={type.name}
                                key={type.name}
                                sx={{
                                    textTransform: "capitalize",
                                    fontWeight: "bold",
                                    marginRight: "4px",
                                }}
                            />
                        ))}

                        <Box
                            display="grid"
                            gridTemplateColumns="repeat(3, 1fr)"
                            justifyItems="center"
                            width="min(100%, 120px)"
                            my={1}
                        >
                            <Typography>
                                {pokemon.weight}
                                <Typography
                                    component="span"
                                    sx={{ fontSize: 12 }}
                                >
                                    kg
                                </Typography>
                            </Typography>

                            <Divider
                                orientation="vertical"
                                sx={{ width: "3px" }}
                            />

                            <Typography>
                                {pokemon.height}

                                <Typography
                                    component="span"
                                    sx={{ fontSize: 12 }}
                                >
                                    m
                                </Typography>
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Wrapper>
    )
}

export default Pokemon

// * Server Side
import { fetchPokemonApi } from "lib/pokemon"

export async function getServerSideProps({ params }) {
    try {
        const name = params.name
        const pokemon = await fetchPokemonApi(name)

        return { props: { pokemon } }
    } catch (error) {
        console.log(error)
    }

    return { notFound: true }
}
