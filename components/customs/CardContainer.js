import styled from "@emotion/styled"
import Box from "@mui/material/Box"

const CardContainer = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: theme.spacing(2),
    padding: theme.spacing(2),
}))

export default CardContainer
