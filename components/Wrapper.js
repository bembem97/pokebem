import React, { useState } from "react"
import Head from "next/head"
import PropTypes from "prop-types"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"

import Nav from "./customs/navbar/Nav"
import TypeDrawer from "./customs/navbar/TypeDrawer"

import { DrawerContext } from "lib/Context"

const drawerWidth = 250

const Wrapper = ({ children, title, ...props }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
        <Box {...props} sx={{ height: 1 }}>
            <Head>
                <title>{title.toString() || "Page has no title"}</title>
            </Head>

            <Container maxWidth="xl" disableGutters sx={{ height: 1 }}>
                <Box
                    className="Wrapper"
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "repeat(1, 1fr)",
                            md: `${drawerWidth}px 1fr`,
                        },
                        gridTemplateRows: {
                            md: `minmax(0px, 64px) 1fr`,
                        },
                    }}
                >
                    <DrawerContext.Provider
                        value={[isDrawerOpen, setIsDrawerOpen]}
                    >
                        {/* //* Drawer */}
                        <TypeDrawer
                            drawerWidth={drawerWidth}
                            drawerStyles={{
                                height: { xs: "initial", md: "100vh" },
                                gridColumn: "1",
                                overflow: "auto",
                                position: "sticky",
                                top: 0,
                            }}
                        />

                        {/* //* Navigation */}
                        <Nav appBarStyles={{ gridColumn: { md: "2" } }} />

                        {/* //* Main Content */}
                        <Box
                            padding={1}
                            component="main"
                            sx={{ gridColumn: { md: "2" } }}
                        >
                            {children}
                        </Box>
                    </DrawerContext.Provider>
                </Box>
            </Container>
        </Box>
    )
}

export default Wrapper

Wrapper.propTypes = {
    title: PropTypes.string.isRequired,
}
