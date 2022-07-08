import React, { useContext } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

import Drawer from "@mui/material/Drawer"
import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import Toolbar from "@mui/material/Toolbar"
import SwipeableDrawer from "@mui/material/SwipeableDrawer"

import { alpha } from "@mui/material/styles"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import styled from "@emotion/styled"

import types from "src/types"
import { DrawerContext } from "lib/Context"

const DrawerToolbar = styled(Toolbar)(({ theme }) => ({
    borderBottom: "1px solid rgba(0, 0, 0, .12)",
}))

const TypeDrawer = ({ window, drawerWidth, drawerStyles }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useContext(DrawerContext)

    const handleDrawerToggle = () => setIsDrawerOpen(!isDrawerOpen)
    const { query } = useRouter()

    const drawer = (
        <>
            <DrawerToolbar>
                <Typography variant="h5" component="h1">
                    Types
                </Typography>
            </DrawerToolbar>

            <List sx={{ py: 0 }}>
                <ListItem
                    sx={{ display: { xs: "block", md: "none" } }}
                    disablePadding
                    disableGutters
                >
                    <Link passHref href="/">
                        <ListItemButton>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </Link>
                </ListItem>

                {types.map((type) => (
                    <ListItem key={type} disablePadding disableGutters>
                        <Link
                            passHref
                            href={{
                                pathname: "/pokemon/type/[type]",
                                query: { type: type },
                            }}
                        >
                            <ListItemButton
                                sx={(theme) => ({
                                    backgroundColor:
                                        type === query.type &&
                                        theme.palette[type].main,
                                    color:
                                        type === query.type &&
                                        theme.palette[type].contrastText,
                                    "&:hover": {
                                        backgroundColor:
                                            type === query.type &&
                                            alpha(
                                                theme.palette[type].main,
                                                0.55
                                            ),
                                    },
                                })}
                            >
                                <ListItemText
                                    primary={type}
                                    sx={{ textTransform: "capitalize" }}
                                />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </>
    )

    const container =
        window !== undefined ? () => window().document.body : undefined

    return (
        <Box component="aside" sx={{ ...drawerStyles }}>
            {/* //* Small Screen */}
            <SwipeableDrawer
                anchor="left"
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                onOpen={() => setIsDrawerOpen(true)}
                sx={{
                    display: { xs: "block", md: "none" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: { xs: "min(100%, 320px)", md: drawerWidth },
                    },
                }}
            >
                <IconButton
                    onClick={() => setIsDrawerOpen(false)}
                    sx={{
                        justifyContent: "flex-end",
                        borderRadius: 0,
                    }}
                >
                    <ChevronLeftIcon />
                </IconButton>

                {drawer}
            </SwipeableDrawer>

            {/* //* Big Screen */}
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: "none", md: "block" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: { xs: 0, md: drawerWidth },
                    },
                }}
                open
                PaperProps={{ sx: { position: "static" } }}
            >
                {drawer}
            </Drawer>
        </Box>
    )
}

export default TypeDrawer
