import { React, useState } from 'react'

import { NameInput } from "./inputs/NameInput";
import { UrlInput } from "./inputs/UrlInput";
import { BirthdateInput } from "./inputs/BirthdateInput";
// MUI components
import { Box, Typography, Dialog, Button, IconButton, TextField, Select, MenuItem, FormControl } from '@mui/material'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import CloseIcon from '@mui/icons-material/Close';

import { convertDateFormat } from "../lowLevelHelpers";

export function EditModal(props) {
    let { open, selectedCatData, saveUpdates, closeEditModal } = props
    return (
        <Dialog
            open={open}
            onClose={closeEditModal}
            PaperProps={{
                sx: {
                    width: "1000px",
                    height: "625px",
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
            height: "75px",
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
    let { selectedCatData, 
        saveUpdates, 
        closeEditModal } = props

    const [formState, setFormState] = useState({...selectedCatData})

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }
    const handleDateChange = (newDate) => {
        console.log(`New Date: ${newDate}`)
        let trimmedDate = newDate.slice(0,10)
        setFormState({
            ...formState,
            "birthdate": trimmedDate,
        });
    }

    return (
        <Box sx={{
            height: "550px",
            display: "flex",
            flexDirection: "column"
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
                handleDateChange={handleDateChange}
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

function OwnerInput(props) {
    let { formOwner, handleFormChange } = props
    
    let owners = ["Claire Morrison", "Jane Doe", "Jane Smith", "John Doe", "Kate Debarros", "Sam Jones"]
    
    return (
        <FormRow>
            <Typography
                variant="body1"
                children={"Owner"}
                sx={{ width: "40%" }}
            />
            <FormControl sx={{ width: "50%" }} > 
            {/* <TextField
                name="owner_name"
                value={formOwner}
                variant="outlined"
                onChange={handleFormChange}
            /> */}
                <Select
                    name="owner_name"
                    labelId="select-owner"
                    id="select-owner"
                    value={formOwner}
                    onChange={handleFormChange}
                >
                    <MenuItem value="Claire Morrison" >Claire Morrison</MenuItem>
                    <MenuItem value="Jane Doe" >Jane Doe</MenuItem>
                    <MenuItem value="Jane Smith" >Jane Smith</MenuItem>
                    <MenuItem value="John Doe" >John Doe</MenuItem>
                    <MenuItem value="Kate Debarros" >Kate Debarros</MenuItem>
                    <MenuItem value="Sam Jones" >Sam Jones</MenuItem>
                </Select>
            </FormControl>
        </FormRow>
    )
}

function SaveAndCancelButtons(props) {
    let { formState, saveUpdates, closeEditModal } = props

    return (
        <Box
            sx={{
                display: "flex",
                width: '100%',
                height: "75px",
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



