import { React, useState } from 'react'
import { catData } from "./catData";

// MUI components
import { Container, Box, Typography } from '@mui/material'
// THEME
import theme from "./theme"
import { ThemeProvider } from '@mui/material'

export default function App() {
    catData.forEach(cat => {
        console.log(`DATA for cat number ${cat.id}: ${JSON.stringify(cat, null, 4)}`);
    });
    
  
    return (
        <ThemeProvider theme={theme}>
            <Box id="root"
                sx={{
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "#efefef", // grey backdrop
                    overflow: "hidden",
                    display: 'flex',
                    flexDirection: "column"
                }}
            >
                <AppBody />

                
                <EditModal />
            </Box>
        </ThemeProvider>
    )
}

function AppBody(props) {
    return (
        <Container maxWidth="lg" >
            <Summary />
            <Detail />
        </Container>
    )
}

function Summary(props) {
    return (
        <Box >
        </Box>
    )
}

function Detail(props) {
    return (
        <Box >
        </Box>
    )
}

function EditModal(props) {
    return (
        <Box >
        </Box>
    )
}