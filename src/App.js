import { React, useState, useEffect, useMemo } from 'react'
import { sourceCatData } from "./catData";

import { AppBar } from "./components/AppBar"
import { SummaryList } from "./components/SummaryList"
import { DetailPanel } from "./components/DetailPanel"
import { EditModal } from "./components/EditModal";
import { ConfirmDeleteModal } from "./components/ConfirmDeleteModal";


// MUI components
import { Container, Box } from '@mui/material'

// THEME
import theme from "./theme"
import { ThemeProvider } from '@mui/material'

let primary = theme.palette.primary.main


export default function App() {
    const [catList, setCatList] = useState(sourceCatData)

    const [selectedCatData, setSelectedCatData] = useState({})
    
    const [editModalOpen, setEditModalOpen] = useState(false)
    const toggleEditModal = (editModalOpen) => {
        setEditModalOpen(!editModalOpen)
    }
    
    const [confirmDeleteModalOpen, setConfirmDeleteModalOpen] = useState(false)
    const toggleConfirmDeleteModal = (confirmDeleteModalOpen) => {
        setConfirmDeleteModalOpen(!confirmDeleteModalOpen)
    }

    

    const deleteCat = (selectedCatId, cl = catList ) => {
        let filteredList = cl.filter(cat => cat.id !== selectedCatId)
        // console.log(`List after deleting cat ${selectedCatId} is: ${JSON.stringify(filteredList, null, 4)}`);
        setCatList(filteredList)
        toggleConfirmDeleteModal(confirmDeleteModalOpen)
        setSelectedCatData({})
    }

    const saveUpdates = () => {
        console.log(`SAVE CLICKED`);
    }

    const viewCatDetails = (catId) => {
        incrementViewCount(catId)
        setSelectedCatData(getCatDataById(catId))
        console.log(`Setting selected cat to: ${catId}`);
    }
    const incrementViewCount = (catId) => {
        let prevCount = getCatDataById(catId).views_count
        let index = getIndexInList(catId)
        let updatedCatList = [...catList]
        updatedCatList[index].views_count = ++prevCount
        setCatList(updatedCatList)
    }
    const getIndexInList = (catId) => {
        for (let i = 0; i < catList.length; i++) {
            if (catList[i].id === catId) {
                return i
            }
        }
    }
    
    function getCatDataById(id) {
        let cat = catList.filter(catObject => catObject.id === id)
        console.assert(cat.length === 1, `getCatById found more than one cat with id ${id} --> ${JSON.stringify(cat, null, 4)}`)
        return cat[0]
    }

    
    // COPIED
    // function handleNameStringChange(event) {
    //     setNameSearchString(event.target.value.toLowerCase())
    // }
    
    // useEffect(() => {
    //     let catIds = catData.map(cat => cat.id)
    //     let validSelection = catIds.includes(selectedCatId)
    //     let selectedCatData = (validSelection) ? getCatById(selectedCatId) : "Please Select a Cat"

    // }, [selectedCatId])
    
    
    // let catIds = catData.map(cat => cat.id)
    // let validSelection = catIds.includes(selectedCatId)
    // let selectedCatData = (validSelection) ? getCatById(selectedCatId) : "Please Select a Cat"
    // console.log(`Cat IDS present: ${catIds}`);
    // console.log(`VALID selection: ${validSelection}`)
    // console.log(`DATA for SELECTED cat number ${selectedCatId}: ${JSON.stringify(selectedCatData, null, 4)}`);

    
  
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
                        catList={catList}
                        viewCatDetails={viewCatDetails}
                    />
                    <DetailPanel 
                        selectedCatData={selectedCatData}
                        toggleEditModal={toggleEditModal}
                        toggleConfirmDeleteModal={toggleConfirmDeleteModal}
                        deleteCat={deleteCat}
                    />
                </Container>
                
                <EditModal 
                    open={editModalOpen}
                    toggleEditModal={toggleEditModal}
                    selectedCatData={selectedCatData}


                />
                <ConfirmDeleteModal
                    open={confirmDeleteModalOpen}
                    toggleConfirmDeleteModal={toggleConfirmDeleteModal}
                    selectedCatData={selectedCatData}
                    deleteCat={deleteCat}
                />
            </Box>
        </ThemeProvider>
    )
}

function Sidebar(props) {
    let { catList, viewCatDetails } = props
    return (
        <Box sx={{
            flex: "0 1 35%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
        }}>
            <SearchBox  />
            <SummaryList 
                catList={catList}
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


