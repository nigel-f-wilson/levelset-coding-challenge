import { React, useState,  useMemo } from 'react'
import { catData } from "./catData";

import { AppBar } from "./components/AppBar"
// MUI components
import { Container, Box, Avatar, Grid, Typography } from '@mui/material'
import { Dialog } from '@mui/material'
import { List, ListItem } from '@mui/material'

// THEME
import theme from "./theme"
import { ThemeProvider } from '@mui/material'

let primary = theme.palette.primary.main


export default function App() {
    const [selectedCat, setSelectedCat] = useState()
    const [editModalOpen, setEditModalOpen] = useState(false)
    // const [viewCounts, setViewCounts] = useState(new Map(catData.map()))  // AVOID using map because ids are unique and start from 1

    const toggleEditModal = (editModalOpen) => {
        setEditModalOpen(!editModalOpen)
    }

    const viewCatDetails = (catId) => {
        setSelectedCat(catId)
        console.log(`Setting selected cat to: ${catId}`);
    }
    
    // COPIED
    // function handleNameStringChange(event) {
    //     setNameSearchString(event.target.value.toLowerCase())
    // }
    
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
                    <Summary
                        viewCatDetails={viewCatDetails}
                    />
                    <Detail 
                        selectedCat={selectedCat}
                    />
                </Container>
                
                <EditModal 
                    open={editModalOpen}
                />
            </Box>
        </ThemeProvider>
    )
}

function Summary(props) {
    let { viewCatDetails } = props
    return (
        <Box sx={{
            flex: "0 1 35%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
        }}>
            <SearchBox  />
            <ListOfCats 
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




function Detail(props) {
    let { selectedCat } = props
    
    
    return (
        <Box sx={{
            flex: "0 0 65%",
            height: "100%",
            display: "flex", 
            justifyContent: "center",
            paddingTop: "4rem"

        }}>
          THE SELECETED CAT IS {selectedCat}
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