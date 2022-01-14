import { React, useState } from 'react'
import { sourceCatData } from "./catData";

// For Date Picker
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import { AppBar } from "./components/AppBar"
import { SideBar } from "./components/SideBar"
import { DetailPanel } from "./components/DetailPanel"
import { EditModal } from "./components/EditModal";
import { ConfirmDeleteModal } from "./components/ConfirmDeleteModal";

// MUI components
import { Container, Box } from '@mui/material'

// THEME
import theme from "./theme"
import { ThemeProvider } from '@mui/material'

export default function App() {
    const [catList, setCatList] = useState(sourceCatData)
    const [selectedCatData, setSelectedCatData] = useState({})
    
    const [searchString, setSearchString] = useState("")
    function handleSearchStringChange(event) {
        setSearchString(event.target.value.toLowerCase())
        console.log(`SEARCH STRING UPDATED to: ${event.target.value} `);
    }
    
    const [editModalOpen, setEditModalOpen] = useState(false)
    const toggleEditModal = (editModalOpen) => {
        setEditModalOpen(!editModalOpen)
    }
    const closeEditModal = () => {
        console.log("Close Edit Modal Called");
        setEditModalOpen(false)
    }

    const saveUpdates = (updatedCatData, cl = catList) => {
        let idOfCatToUpdate = updatedCatData.id
        let index = getIndexInList(idOfCatToUpdate)
        let updatedCatList = [...cl]
        updatedCatList[index] = updatedCatData
        setCatList(updatedCatList)
        closeEditModal()
        setSelectedCatData(updatedCatData)
    }
    
    const [confirmDeleteModalOpen, setConfirmDeleteModalOpen] = useState(false)
    const toggleConfirmDeleteModal = (confirmDeleteModalOpen) => {
        setConfirmDeleteModalOpen(!confirmDeleteModalOpen)
    }
    const deleteCat = (selectedCatId, cl = catList ) => {
        let filteredList = cl.filter(cat => cat.id !== selectedCatId)
        setCatList(filteredList)
        toggleConfirmDeleteModal(confirmDeleteModalOpen)
        setSelectedCatData({})
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

    return (
        <ThemeProvider theme={theme}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
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
                        }} 
                    >
                        <SideBar
                            searchString={searchString}
                            handleSearchStringChange={handleSearchStringChange}
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
                        saveUpdates={saveUpdates}
                        closeEditModal={closeEditModal}
                    />
                    <ConfirmDeleteModal
                        open={confirmDeleteModalOpen}
                        toggleConfirmDeleteModal={toggleConfirmDeleteModal}
                        selectedCatData={selectedCatData}
                        deleteCat={deleteCat}
                    />
                </Box>
            </LocalizationProvider>
        </ThemeProvider>
    )

    
}

