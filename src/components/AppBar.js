import { React } from 'react'
import { Box, Typography } from '@mui/material'

export function AppBar(props) {
    return (
        <Box sx={{
            height: "2.5rem",
            width: "100%",
            backgroundColor: "grey.800",
            display: "flex",
            // justifyContent: "center"
            alignItems: "center"
        }} >
            <Circles />
            <Typography
                children="Cats"
                variant="h6"
                color="common.white"
                sx={{ margin: "0rem auto" }}
            />
        </Box>
    )
}

function Circles() {
    return (
        <Box sx={{
            padding: "0 0.5rem",
            width: "6rem",
            height: "2.5rem",
            backgroundColor: "rgba(0,0,0,0)",
            position: "absolute",
            left: 0,
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"
        }} >
            <Circle color="#cc3232" />
            <Circle color="#e7b416" />
            <Circle color="#2dc937" />
        </Box>
    )
}

function Circle(props) {
    let { color } = props
    return (
        <Box sx={{
            backgroundColor: color,
            width: "1rem",
            height: "1rem",
            borderRadius: "50%"
        }} />
    )
}