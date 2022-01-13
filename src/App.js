import { React, useState,  useMemo } from 'react'
import { sourceCatData } from "./catData";

import { AppBar } from "./components/AppBar"
import { SummaryList } from "./components/SummaryList"

// MUI components
import { Container, Box, Avatar, Grid, Typography } from '@mui/material'
import { Dialog } from '@mui/material'

// THEME
import theme from "./theme"
import { ThemeProvider } from '@mui/material'

let primary = theme.palette.primary.main


export default function App() {
    const [catData, setCatData] = useState(sourceCatData)

    
    const [selectedCatId, setSelectedCatId] = useState(null)
    
    
    const [editModalOpen, setEditModalOpen] = useState(false)

    const toggleEditModal = (editModalOpen) => {
        setEditModalOpen(!editModalOpen)
    }

    const deleteCat = (selectedCat, catData) => {
        let filteredData = catData.filter(cat => cat.id !== selectedCat)
        console.log(`Data after deleting cat ${selectedCat} is: ${JSON.stringify(filteredData, null, 4)}`);
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
    let selectedCatsData = (validSelection) ? getCatById(selectedCatId) : "Please Select a Cat"
    console.log(`VALID selection: ${validSelection}`)
    console.log(`DATA for SELECTED cat number ${selectedCatId}: ${JSON.stringify(selectedCatsData, null, 4)}`);

    function getCatById(id) {
        let cat = catData.filter(catObject => catObject.id === id)
        console.assert(cat.length !== 1, `getCatById found more than one cat with id ${id}`)
        return cat[0]
        // console.log(`FOUND CAT with ID ${id}: ${JSON.stringify(cat, null, 4)}`);
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
                        selectedCatsData={selectedCatsData}
                        toggleEditModal={toggleEditModal}
                        deleteCat={deleteCat}
                    />
                </Container>
                
                <EditModal 
                    open={editModalOpen}
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


function DetailPanel(props) {
    let { validSelection, selectedCatId, selectedCatsData, toggleEditModal, deleteCat } = props
    let { name, thumbnail_url, birthdate, owner_name, views_count } = selectedCatsData

    let details = (validSelection) ? 
    <Box sx={{ 
        display: "flex", 
        flexDirection: "column", 
        border: "solid red 1px", 
        width: "70%"  
    }}>
        <Box id="cat detail picture"
            sx={{
                paddingTop: "75%",
                height: '0',
                width: '100%',
                backgroundImage: `url(${thumbnail_url})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        />
        <Typography variant="h3" children={name} />
        <Typography variant="h5" children={`Birthdate: ${birthdate}`} />
        <Typography variant="h5" children={`Owner: ${owner_name}`} />
        <Typography variant="h5" children={`Number of views: ${views_count} times`} />
    </Box>
    :
    <Typography children="Please Select a cat" />
    
    
    return (
        <Box sx={{
            border: "solid green 1px",

            flex: "0 0 65%",
            height: "100%",
            display: "flex", 
            flexDirection: "column",  
            justifyContent: "space-between",
            alignItems: "center",
            padding: "4rem 0rem 2rem"

        }}>
            { details }
            <Buttons 
                toggleEditModal={toggleEditModal}
                deleteCat={deleteCat}
            />
        </Box>
    )
}
function Buttons(props) {
    return (
        <Box
            sx={{
                border: "solid red 1px",
                width: '6rem',
                height: '6rem',
            }}
        >
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

function convertDateFormat(inputDate) {
    let firstHyphen = inputDate.indexOf("-")
    let secondHyphen = inputDate.lastIndexOf("-")
    let year = inputDate.slice(0, firstHyphen)
    let monthList = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
    let monthNumber = Number(inputDate.slice(firstHyphen + 1, secondHyphen))
    let month = monthList[(monthNumber - 1)]
    let day = Number(inputDate.slice(secondHyphen + 1))
    let date = `${day} ${month} ${year}`
    console.log(`DATE: ${date}`);
    return date
}