import { React, useState, Fragment } from 'react'

// MUI components
import { Box, Grid, Typography, Dialog, Button, IconButton, TextField } from '@mui/material'
import DatePicker from '@mui/lab/DatePicker';
import CloseIcon from '@mui/icons-material/Close';

import { convertDateFormat } from "../lowLevelHelpers";

export function EditModal(props) {
    let { open, selectedCatData, saveUpdates, closeEditModal } = props
    // let { id, thumbnail_url, name, birthdate, owner_name } = selectedCatData
    
    console.log(`EditModal has selectedCatData: ${JSON.stringify(selectedCatData, null, 4)}`)

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
        // console.log(`Change event has name: "${name}" and value: "${value}"`);
        setFormState({
            ...formState,
            [name]: value,
        });
    }
    // console.log(`Form has name: ${formState.name}`);
    // console.log(`Form has thumbnail_url: ${formState.thumbnail_url}`);
    // console.log(`Form has owner: ${formState.owner_name}`);
    // console.log(`Form has birthdate: ${formState.birthdate}`);

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

function UrlInput(props) {
    let { formUrl, handleFormChange } = props
    return (
        <FormRow>
            <Typography
                variant="body1"
                children={"Thumbnail URL"}
                sx={{ width: "40%" }}
            />
            <TextField
                name="thumbnail_url"
                value={formUrl}
                variant="outlined"
                onChange={handleFormChange}
            />
        </FormRow>
    )
}

function NameInput(props) {
    let { formName, handleFormChange } = props
    return (
        <FormRow>
            <Typography
                variant="body1"
                children={"Name"}
                sx={{ width: "40%" }}
            />
            <TextField
                name="name"
                value={formName}
                variant="outlined"
                onChange={handleFormChange}
            />
        </FormRow>
    )
}

function BirthdateInput(props) {
    let { formBirthdate, handleFormChange } = props
    
    let params = {
        variant: "outlined"

    }
    
    return (
        <FormRow>
            <Typography
                variant="body1"
                children={"Birthdate"}
                sx={{ width: "40%" }}
            />
            {/* <DatePicker
                name="birthdate"
                value={formBirthdate}
                // variant="outlined"
                onChange={handleFormChange}
                renderInput={(params) => <TextField {...params} />}
            /> */}
            <TextField
                name="birthdate"
                value={formBirthdate}
                variant="outlined"
                onChange={handleFormChange}
            />
        </FormRow>
    )
}
function OwnerInput(props) {
    let { formOwner, handleFormChange } = props
    return (
        <FormRow>
            <Typography
                variant="body1"
                children={"Thumbnail URL"}
                sx={{ width: "40%" }}
            />
            <TextField
                name="owner_name"
                value={formOwner}
                variant="outlined"
                onChange={handleFormChange}
            />
        </FormRow>
    )
}

function FormRow(props) {
    return (
        <Box id="form_row"
            sx={{
                width: "100%",
                height: "100px",
                paddingLeft: "2rem",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center"
            }} >
            {props.children}
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



