import styled from "@emotion/styled"
import { alpha } from "@mui/material/styles"
import { blue } from "@mui/material/colors"

import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Box from "@mui/material/Box"
import InputBase from "@mui/material/InputBase"

// const AppBarStyled = styled(AppBar)(({ theme }) => ({
//     boxShadow: theme.shadows[1],
// }))

// const ToolbarStyled = styled(Toolbar)(({ theme }) => ({}))

// const SearchBar = styled(Box)(({ theme }) => ({
//     backgroundColor: alpha(blue["200"], 0.25),
//     paddingInline: theme.spacing(1),
//     borderRadius: theme.spacing(1),
//     display: "flex",
//     alignItems: "center",
// }))

// const InputBaseStyled = styled(InputBase)(({ theme }) => ({
//     "& .MuiInputBase-input": {
//         transition: "width 100ms",
//         width: "7rem",

//         "&:focus": {
//             width: "10rem",
//         },
//     },
// }))

// export { AppBarStyled, ToolbarStyled, SearchBar, InputBaseStyled }

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "16ch",
            // "&:focus": {
            //     width: "20ch",
            // },
        },
    },
}))

export { Search, SearchIconWrapper, StyledInputBase }
