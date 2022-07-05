import { createTheme } from "@mui/material/styles"
import {
    red,
    blue,
    green,
    orange,
    grey,
    lime,
    yellow,
    cyan,
    purple,
    deepPurple,
    pink,
    brown,
    lightGreen,
} from "@mui/material/colors"

// Create a theme instance.
const theme = createTheme({
    palette: {
        night: {
            main: grey[800],
        },
        primary: {
            main: blue[300],
        },
        secondary: {
            main: "#19857b",
        },
        error: {
            main: red.A400,
        },
        // * POKEMON COLOR TYPE
        normal: {
            main: lime[700],
            contrastText: "#000",
        },
        fighting: {
            main: red[900],
            contrastText: "#fff",
        },
        flying: {
            main: deepPurple[400],
            contrastText: "#fff",
        },
        poison: {
            main: purple[800],
            contrastText: "#fff",
        },
        ground: {
            main: yellow["A100"],
            contrastText: "#000",
        },
        rock: {
            main: green[400],
            contrastText: "#000",
        },
        bug: {
            main: lightGreen[400],
            contrastText: "#000",
        },
        ghost: {
            main: purple[900],
            contrastText: "#fff",
        },
        steel: {
            main: cyan[100],
            contrastText: "#000",
        },
        fire: {
            main: orange[400],
            contrastText: "#000",
        },
        water: {
            main: blue[500],
            contrastText: "#fff",
        },
        grass: {
            main: green[400],
            contrastText: "#000",
        },
        electric: {
            main: yellow[500],
            contrastText: "#000",
        },
        psychic: {
            main: pink[500],
            contrastText: "#fff",
        },
        ice: {
            main: cyan[400],
            contrastText: "#000",
        },
        dragon: {
            main: deepPurple[800],
            contrastText: "#fff",
        },
        dark: {
            main: brown[900],
            contrastText: "#fff",
        },
        fairy: {
            main: pink[100],
            contrastText: "#000",
        },
    },
})

export default theme
