import { React, useState } from 'react'

// My components
import { NameInput } from "./inputs/NameInput";
import { UrlInput } from "./inputs/UrlInput";
import { BirthdateInput } from "./inputs/BirthdateInput";
import { OwnerInput } from "./inputs/OwnerInput";


// MUI components
import { Box, Typography, Dialog, Button, IconButton, } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

export function EditModal(props) {
    let { open, selectedCatData, saveUpdates, closeEditModal } = props
    return (
        <Dialog
            open={open}
            onClose={closeEditModal}
            PaperProps={{
                sx: {
                    width: "1000px",
                    height: "650px",
                    borderRadius: 4,
                    overflowX: "hidden"
                }
            }}>
            <Header 
                closeEditModal={closeEditModal}
            />
            <Form 
                selectedCatData={selectedCatData}
                saveUpdates={saveUpdates}
                closeEditModal={closeEditModal}
            />
        </Dialog>
    )
}

function Header(props) {
    let { closeEditModal } = props
    return (
        <Box sx={{
            borderBottom: "solid #888 1px",
            height: "100px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 1rem"

        }} >
            <Typography variant="h4" children="Edit Cat" />
            <IconButton
                children={<CloseIcon />}
                onClick={closeEditModal}
            />
        </Box>
    )
}
function Form(props) {
    let { selectedCatData, saveUpdates, closeEditModal } = props

    const [formState, setFormState] = useState({...selectedCatData})

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        console.log(`Updating Form field "${name}" with value: ${value}`)

        setFormState({
            ...formState,
            [name]: value,
        });
    }
    
    return (
        <Box sx={{
            height: "550px",
            display: "flex",
            flexDirection: "column",
            padding: "1rem 0 0"
        }} >
            
            
            <NameInput
                formName={formState.name}
                handleFormChange={handleFormChange}
            />
            <UrlInput
                formUrl={formState.thumbnail_url}
                handleFormChange={handleFormChange}
            />
            <BirthdateInput
                formBirthdate={formState.birthdate}
                handleFormChange={handleFormChange}
            />
            <OwnerInput
                formOwner={formState.owner_name}
                handleFormChange={handleFormChange}
            />
            <SaveAndCancelButtons 
                formState={formState}
                saveUpdates={saveUpdates} 
                closeEditModal={closeEditModal}    
            />
        </Box>
    )

    
}

function SaveAndCancelButtons(props) {
    let { formState, saveUpdates, closeEditModal } = props

    return (
        <Box
            sx={{
                display: "flex",
                width: '100%',
                height: "100px",
                justifyContent: "flex-end",
                alignItems: "center",
                borderTop: "solid #888 1px",
            }}
        >
            <Button
                children="Save"
                onClick={() => { saveUpdates(formState) }}
            />
            <Box sx={{ width: "0", height: "1.6rem", margin: "0.8rem 0.5rem", border: "solid black 1px" }} />
            <Button
                children="Cancel"
                onClick={closeEditModal}
                sx={{ paddingRight: "2rem", }}
            />
        </Box>
    )
}



