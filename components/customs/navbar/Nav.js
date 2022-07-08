import React, { useState, useContext } from "react"
import Link from "next/link"

import SearchPokemon from "./SearchBar"

import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import MuiLink from "@mui/material/Link"
import Typography from "@mui/material/Typography"

import HomeIcon from "@mui/icons-material/Home"
import MenuIcon from "@mui/icons-material/Menu"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"

import { DrawerContext } from "lib/Context"

const Nav = ({ appBarStyles }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useContext(DrawerContext)
    const theme = useTheme()
    const mq = useMediaQuery(theme.breakpoints.up("sm"))

    return (
        <>
            <AppBar
                position="sticky"
                sx={{ boxShadow: (theme) => theme.shadows[0], ...appBarStyles }}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="open drawer"
                        sx={{ mr: 2, display: { xs: "block", md: "none" } }}
                        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            flexGrow: 1,
                            // display: { xs: "none", sm: "block" },
                        }}
                    >
                        <Link passHref href={"/"}>
                            <MuiLink underline="none" color="black">
                                {mq ? "Pokemon" : <HomeIcon fontSize="large" />}
                            </MuiLink>
                        </Link>
                    </Typography>

                    <SearchPokemon />
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Nav
