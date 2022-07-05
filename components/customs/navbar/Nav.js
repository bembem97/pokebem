import React, { useState, useContext } from "react"
import Link from "next/link"

// import { ToolbarStyled as Toolbar, AppBarStyled as AppBar } from "./StyledNav"
import SearchPokemon from "./SearchBar"

import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"

import MenuIcon from "@mui/icons-material/Menu"
import IconButton from "@mui/material/IconButton"
import Box from "@mui/material/Box"
import MuiLink from "@mui/material/Link"
import Typography from "@mui/material/Typography"

import { DrawerContext } from "lib/Context"

const Nav = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useContext(DrawerContext)

    return (
        <>
            {/* <Box sx={{ flexGrow: 1 }}> */}
            <AppBar
                position="sticky"
                sx={{ boxShadow: (theme) => theme.shadows[0] }}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="open drawer"
                        sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
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
                            display: { xs: "none", sm: "block" },
                        }}
                    >
                        <Link passHref href={"/"}>
                            <MuiLink underline="none" color="black">
                                Pokemon
                            </MuiLink>
                        </Link>
                    </Typography>

                    <SearchPokemon />
                </Toolbar>
            </AppBar>
            {/* </Box> */}
        </>
    )
}

export default Nav
