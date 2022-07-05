import React, { useState } from "react"
import Head from "next/head"
import PropTypes from "prop-types"
import Box from "@mui/material/Box"

import Nav from "./customs/navbar/Nav"
import TypeDrawer from "./customs/navbar/TypeDrawer"

import { DrawerContext } from "lib/Context"

const drawerWidth = 250

const Wrapper = ({ children, title, ...props }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
        <Box {...props} className="Wrapper">
            <Head>
                <title>{title.toString() || "Page has no title"}</title>
            </Head>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: `${drawerWidth}px 1fr`,
                    },
                }}
            >
                <DrawerContext.Provider value={[isDrawerOpen, setIsDrawerOpen]}>
                    {/* //* Drawer */}
                    <TypeDrawer drawerWidth={drawerWidth} />

                    {/* //* Main Content */}
                    <div>
                        <Nav />
                        <Box padding={1}>{children}</Box>
                    </div>
                </DrawerContext.Provider>
            </Box>
        </Box>
    )
}

export default Wrapper

Wrapper.propTypes = {
    title: PropTypes.string.isRequired,
}
