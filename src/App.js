import { React, useState,  useMemo } from 'react'
import { sourceCatData } from "./catData";

import { AppBar } from "./components/AppBar"
import { SummaryList } from "./components/SummaryList"
import { DetailPanel } from "./components/DetailPanel"
import { EditModal } from "./components/EditModal";


// MUI components
import { Container, Box, Avatar, Grid, Typography,   } from '@mui/material'
import { Dialog, Button, IconButton } from '@mui/material'

// THEME
import theme from "./theme"
import { ThemeProvider } from '@mui/material'

let primary = theme.palette.primary.main


export default function App() {
    const [catList, setCatList] = useState(sourceCatData)

    
    const [selectedCatId, setSelectedCatId] = useState(null)
    
    
    const [editModalOpen, setEditModalOpen] = useState(false)

    const toggleEditModal = (editModalOpen) => {
        setEditModalOpen(!editModalOpen)
    }

    const deleteCat = (selectedCatId, cd = catData ) => {
        let filteredData = cd.filter(cat => cat.id !== selectedCatId)
        // console.log(`Data after deleting cat ${selectedCatId} is: ${JSON.stringify(filteredData, null, 4)}`);
        setCatData(filteredData)
    }

    const viewCatDetails = (catId) => {
        setSelectedCatId(catId)
        console.log(`Setting selected cat to: ${catId}`);
    }
    
    // COPIED
    // function handleNameStringChange(event) {
    //     setNameSearchString(event.target.value.toLowerCase())
    // }
    
    // catData.forEach(cat => {
    //     console.log(`DATA for cat number ${cat.id}: ${JSON.stringify(cat, null, 4)}`);
    // });

    let catIds = catData.map(cat => cat.id)
    console.log(`Cat IDS present: ${catIds}`);
    
    let validSelection = catIds.includes(selectedCatId)
    let selectedCatData = (validSelection) ? getCatById(selectedCatId) : "Please Select a Cat"
    console.log(`VALID selection: ${validSelection}`)
    console.log(`DATA for SELECTED cat number ${selectedCatId}: ${JSON.stringify(selectedCatData, null, 4)}`);

    function getCatById(id) {
        let cat = catData.filter(catObject => catObject.id === id)
        console.assert(cat.length === 1, `getCatById found more than one cat with id ${id} --> ${JSON.stringify(cat, null, 4)}`)
        return cat[0]
    }
  
    return (
        <ThemeProvider theme={theme}>
            <Box id="root"
                sx={{
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "#efefef", // grey backdrop
                    overflow: "hidden",
                    display: 'flex',
                    flexDirection: "column",
                }}
            >
                <AppBar />

                <Container
                    maxWidth="lg"
                    sx={{
                        height: "100%",
                        display: "flex"
                    }} >
                    <Sidebar
                        catData={catData}
                        viewCatDetails={viewCatDetails}
                    />
                    <DetailPanel 
                        validSelection={validSelection}
                        selectedCatId={selectedCatId}
                        selectedCatData={selectedCatData}
                        toggleEditModal={toggleEditModal}
                        deleteCat={deleteCat}
                    />
                </Container>
                
                <EditModal 
                    open={editModalOpen}
                    toggleEditModal={toggleEditModal}
                    selectedCatData={selectedCatData}

                />
            </Box>
        </ThemeProvider>
    )
}

function Sidebar(props) {
    let { catData, viewCatDetails } = props
    return (
        <Box sx={{
            flex: "0 1 35%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
        }}>
            <SearchBox  />
            <SummaryList 
                catData={catData}
                viewCatDetails={viewCatDetails}
            />
        </Box>
    )
}
function SearchBox() {
    return (
        <Box sx={{
            height: "25%",
            border: `solid ${primary} 1px`,

            
        }}>


        </Box>
    )
}


