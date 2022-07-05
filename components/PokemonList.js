import React, { useState } from "react"
import Image from "next/image"
import NextLink from "next/link"

import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActionArea from "@mui/material/CardActionArea"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const PokemonList = ({ name, id }) => {
    const [imageSource, setImageSource] = useState(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    )

    return (
        <Card key={name} component="article">
            <NextLink
                href={{ pathname: "/pokemon/[name]", query: { name: name } }}
                passHref
            >
                <CardActionArea component="a">
                    <CardMedia
                        image="/vectors/shapes.svg"
                        sx={{
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            position: "relative",
                        }}
                    >
                        <Typography
                            variant="h6"
                            component="h1"
                            sx={{
                                textTransform: "capitalize",
                                position: "absolute",
                                right: "5px",
                            }}
                        >
                            {id}
                        </Typography>

                        <Box component="figure" padding={1} margin={0}>
                            <Image
                                src={imageSource}
                                alt={name}
                                width={200}
                                height={200}
                                onError={() => setImageSource("/pokeball.png")}
                            />
                        </Box>
                    </CardMedia>
                </CardActionArea>
            </NextLink>

            <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography
                        variant="h6"
                        component="h1"
                        sx={{ textTransform: "capitalize" }}
                    >
                        {name}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

export default PokemonList
