// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { fetchPokemonApi, fetchPokemonListApi } from "lib/pokemon"

export default async function handler(req, res) {
  const list = await fetchPokemonListApi(12, 12)
  let pokemon = []

  for (let poke of list.results) {
    const result = await fetchPokemonApi(poke.name)
    pokemon.push(result)
  }

  const pokeInfo = {
    ...list,

    results: pokemon,
  }

  res.status(200).json(pokeInfo)
}
