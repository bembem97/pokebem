import useSWRInfinite from "swr/infinite"

const fetcher = (url) => fetch(url).then((response) => response.json())

const getKey = (index, data) => {
    if (index === 0) return `https://pokeapi.co/api/v2/pokemon?limit=12`
    return data.next
}

const useFetchPokemon = () => {
    const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher)

    const isLoading = !data && !error

    const loadMore =
        isLoading || (size > 0 && data && typeof data[size - 1] === "undefined")

    // * Load more pokemon on a click of a button
    const loadMorePokemon = data ? [...data] : []

    const isEmpty = data?.[0]?.length === 0

    const hasReachedEnd =
        isEmpty || (data && data[data.length - 1]?.next === null)

    return {
        loadMorePokemon,
        isLoading,
        loadMore,
        size,
        setSize,
        hasReachedEnd,
    }
}

export default useFetchPokemon
