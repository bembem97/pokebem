import React from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import CircularProgress from "@mui/material/CircularProgress"
import Typography from "@mui/material/Typography"

const LoadMore = ({ loadMore, hasReachedEnd, size, setSize }) => {
    return (
        <Box my={2}>
            <Box display="flex" justifyContent="center">
                {loadMore ? (
                    <CircularProgress />
                ) : hasReachedEnd ? (
                    <Typography variant="h6">No more data</Typography>
                ) : (
                    <Button
                        onClick={() => setSize(size + 1)}
                        variant="contained"
                    >
                        Load More
                    </Button>
                )}
            </Box>
        </Box>
    )
}

export default LoadMore
