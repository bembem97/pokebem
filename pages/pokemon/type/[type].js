import React from "react"

import PageContainer from "@poke/customs/PageContainer"
import CardContainer from "@poke/customs/CardContainer"
import PokemonList from "@poke/PokemonList"
import Wrapper from "@poke/Wrapper"

import Container from "@mui/material/Container"
import getID from "lib/getID"

const PokemonType = ({ pokemonType }) => {
    const { name: typeName, pokemon: pokemons } = pokemonType

    // console.log(pokemonType)
    return (
        <Wrapper title={`${typeName} - Pokemon Type`}>
            <PageContainer maxWidth={false}>
                <Container>
                    {/* //* Pokemon Card Lists */}
                    <CardContainer>
                        {pokemons.map(({ pokemon }) => {
                            return (
                                <PokemonList
                                    key={pokemon.name}
                                    name={pokemon.name}
                                    id={getID(pokemon.url)}
                                />
                            )
                        })}
                    </CardContainer>
                </Container>
            </PageContainer>
        </Wrapper>
    )
}

export default PokemonType

import { fetchPokemonType } from "lib/pokemon"

export async function getServerSideProps({ params }) {
    try {
        const type = params.type
        const pokemonType = await fetchPokemonType(type)

        return { props: { pokemonType } }
    } catch (error) {
        console.log(error)
    }

    return { notFound: true }
}
