import React, { useEffect } from "react"

import Container from "@mui/material/Container"
import LoadMore from "@poke/customs/LoadMore"

import PageContainer from "@poke/customs/PageContainer"
import CardContainer from "@poke/customs/CardContainer"
import PokemonList from "@poke/PokemonList"
import Wrapper from "@poke/Wrapper"

import useFetchPokemon from "lib/useFetchPokemon"
import getID from "lib/getID"

export default function Home() {
    const {
        loadMorePokemon: data,
        size,
        setSize,
        loadMore,
        hasReachedEnd,
    } = useFetchPokemon()

    return (
        <Wrapper title="Homepage">
            <PageContainer maxWidth={false}>
                <Container>
                    {/* //* Pokemon Card Lists */}
                    <CardContainer>
                        {data.map((arrayPokemon) =>
                            arrayPokemon.results.map((pokemon) => (
                                <PokemonList
                                    key={pokemon.name}
                                    name={pokemon.name}
                                    id={getID(pokemon.url)}
                                    types={pokemon.types}
                                />
                            ))
                        )}
                    </CardContainer>

                    {/* //* Load More Button */}
                    <LoadMore
                        loadMore={loadMore}
                        hasReachedEnd={hasReachedEnd}
                        size={size}
                        setSize={setSize}
                    />
                </Container>
            </PageContainer>
        </Wrapper>
    )
}
