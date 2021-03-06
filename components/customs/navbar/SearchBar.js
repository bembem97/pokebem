import React, { useState, useTransition, useRef } from "react"
import Link from "next/link"
import useSWR from "swr"

import SearchIcon from "@mui/icons-material/Search"
import ClickAwayListener from "@mui/material/ClickAwayListener"
import CircularProgress from "@mui/material/CircularProgress"
import MenuItem from "@mui/material/MenuItem"
import MenuList from "@mui/material/MenuList"
import Popper from "@mui/material/Popper"
import MuiLink from "@mui/material/Link"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"

// import { SearchBar, InputBaseStyled as InputBase } from "./StyledNav"
import { Search, SearchIconWrapper, StyledInputBase } from "./StyledNav"

const fetcher = (url) => fetch(url).then((res) => res.json())

const SearchPokemon = () => {
    const [isPending, startTransition] = useTransition()

    const [pokemonList, setPokemonList] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [inputText, setInputText] = useState("")

    const dropdownRef = useRef(null)

    const { data } = useSWR(
        "https://pokeapi.co/api/v2/pokemon?limit=10000",
        fetcher
    )

    const handleSearch = (e) => {
        const searchItem = e.target.value

        startTransition(() => {
            const filtered = data.results
                .filter((item) =>
                    item.name.toLowerCase().includes(searchItem.toLowerCase())
                )
                .slice(0, 10)

            searchItem && searchItem.length > 0
                ? setPokemonList(filtered)
                : setPokemonList([])
        })
    }

    return (
        <>
            <ClickAwayListener onClickAway={() => setIsOpen(false)}>
                <Search onClick={() => setIsOpen(true)}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>

                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ "aria-label": "search" }}
                        inputRef={dropdownRef}
                        onChange={handleSearch}
                    />

                    <Popper
                        disablePortal
                        anchorEl={dropdownRef.current}
                        open={isOpen}
                        placement="bottom-start"
                        sx={{
                            position: "relative",
                            zIndex: (theme) => theme.zIndex.modal,
                            width: 1,
                        }}
                    >
                        <Paper>
                            <MenuList
                                sx={{ paddingY: 0 }}
                                // autoFocusItem={isOpen}
                            >
                                {pokemonList.map((item) => (
                                    <MenuItem
                                        key={item.name}
                                        sx={{ paddingY: 0 }}
                                    >
                                        <Link
                                            passHref
                                            href={{
                                                pathname: "/pokemon/[name]",
                                                query: { name: item.name },
                                            }}
                                        >
                                            <MuiLink
                                                underline="none"
                                                color="black"
                                                variant="body2"
                                                sx={{
                                                    width: 1,
                                                    paddingY: 1,
                                                }}
                                            >
                                                {item.name}
                                            </MuiLink>
                                        </Link>
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Paper>
                    </Popper>
                </Search>
            </ClickAwayListener>
        </>
    )
}

export default SearchPokemon
