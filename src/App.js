import { React, useState } from 'react'
import { catData } from "./catData";

import { AppBar } from "./components/AppBar"
// MUI components
import { Container, Box, Typography } from '@mui/material'
import { Dialog } from '@mui/material'
// THEME
import theme from "./theme"
import { ThemeProvider } from '@mui/material'

export default function App() {
    const [selectedCatId, setSelectedCatId] = useState(null)

    const [editModalOpen, setEditModalOpen] = useState(false)

    const toggleEditModal = (editModalOpen) => {
        setEditModalOpen(!editModalOpen)
    }
    
    
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
                <AppBar />
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
        <Box sx={{
            flex: "0 0 65%",
            backgroundColor: "#33f",
            height: "100%",
        }}>
        </Box>
    )
}

function EditModal(props) {
    let { open } = props
    return (
        
        // <Box sx={{
        //     width: "100vw",
        //     height: "100vh",
        //     position: "absolute",
        //     display: 'flex',
        //     justifyContent: "center",
        //     alignItems: "center"


        // }}>
            <Dialog 
                open={open}
                PaperProps={{
                    sx: {
                        width: "1000px",
                        height: "625px",
                        borderRadius: 4
                    }

                }}
                sx={{
                    

                    // backgroundColor: "#f3f",
                    // position: "absolute",
                    // display: "flex",
                    // alignSelf: "center",
                    // margin: "auto 0"
                }}>
                

            </Dialog>
        // </Box>
    )
}