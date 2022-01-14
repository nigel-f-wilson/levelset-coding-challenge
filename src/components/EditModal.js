import { React, useState, Fragment } from 'react'

// MUI components
import { Box, Grid, Typography, Dialog, Button, IconButton, TextField } from '@mui/material'
import DatePicker from '@mui/lab/DatePicker';
import CloseIcon from '@mui/icons-material/Close';

import { convertDateFormat } from "../lowLevelHelpers";

export function EditModal(props) {
    let { open, selectedCatData, toggleEditModal, saveUpdates } = props
    let { id, thumbnail_url, name, birthdate, owner_name } = selectedCatData
    
    console.log(`EditModal has selectedCatData: ${JSON.stringify(selectedCatData, null, 4)}`)

    let [formName, setFormName] = useState(name)
    let [formUrl, setFormUrl] = useState(thumbnail_url)
    let [formBirthdate, setFormBirthdate] = useState(birthdate)
    let [formOwner, setFormOwner] = useState(owner_name)

    console.log(`EditModal has name: ${name}`)
    console.log(`EditModal has formName: ${formName}`)
    // console.log(`EditModal has thumbnail_url: ${selectedCatData.thumbnail_url}`)
    // console.log(`EditModal has formUrl: ${formUrl}`)
    
    const updateName = (event) => {
        setFormName(event.target.value)
    }
    const updateUrl = (event) => {
        setFormUrl(event.target.value)
    }
    const updateBirthdate = (event) => {
        setFormBirthdate(event.target.value)
    }
    const updateOwner = (event) => {
        setFormOwner(event.target.value)
    }
    
    return (
        <Dialog
            open={open}
            onClose={toggleEditModal}
            PaperProps={{
                sx: {
                    width: "1000px",
                    height: "625px",
                    borderRadius: 4,
                    overflowX: "hidden"
                }
            }}>
            <Header 
                toggleEditModal={toggleEditModal}
            />
            <Form 
                selectedCatData={selectedCatData}
                saveUpdates={saveUpdates}
                toggleEditModal={toggleEditModal}

                
                name={name}
                thumbnail_url={thumbnail_url}
                birthdate={birthdate}
                owner_name={owner_name}
                
                formName={formName}
                formUrl={formUrl}
                formBirthdate={formBirthdate}
                formOwner={formOwner}


                updateName={updateName}
                updateUrl={updateUrl}
                updateBirthdate={updateBirthdate}
                updateOwner={updateOwner}

            />
        </Dialog>
    )
}

function Header(props) {
    let { toggleEditModal } = props
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
                onClick={toggleEditModal}
            />
        </Box>
    )
}
function Form(props) {
    let { 
        thumbnail_url, name, birthdate, owner_name, 
        formName,
        formUrl, 
        formBirthdate, 
        formOwner, 
        saveUpdates, 
        toggleEditModal, 
        updateName,
        updateUrl, 
        updateBirthdate, 
        updateOwner } = props

    console.log(`Form has formName: ${formName}`);
    console.log(`Form has formUrl: ${formUrl}`);


    return (
        <Box sx={{
            height: "550px",
            display: "flex",
            flexDirection: "column"
        }} >
            
            <UrlInput 
                thumbnail_url={thumbnail_url}
                formUrl={formUrl}
                updateUrl={updateUrl}
            />
            <NameInput
                name={name}
                formName={formUrl}
                updateName={updateName}
            />
            <BirthdateInput
                formBirthdate={formBirthdate}
                updateBirthdate={updateBirthdate}
            />
            <OwnerInput
                formOwner={formOwner}
                updateOwner={updateOwner}
            />


            <SaveAndCancelButtons 
                saveUpdates={saveUpdates} 
                toggleEditModal={toggleEditModal}    
                formName={formName}
                formUrl={formUrl}
                formBirthdate={formBirthdate} 
                formOwner={formOwner}    
            />
        </Box>
    )
}
function FormRow(props) {
    return (
        <Box id="form_row"
            sx={{
                border: "solid #dd2 2px ",
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
function UrlInput(props) {
    let { formUrl, updateUrl } = props

    console.log(`UrlInput has formUrl: ${formUrl} and update function: ${updateUrl}`);
    return (
        <FormRow>
            <Typography
                variant="body1"
                children={"Thumbnail URL"}
                sx={{ width: "40%" }}
            />
            <TextField
                value={formUrl}
                variant="outlined"
                onChange={(e) => updateUrl(e)}
            />
        </FormRow>
    )
}
function NameInput(props) {
    let { name, formName, updateName  } = props

    console.log(`NameInput has formName: ${name}`);
    return (
        <FormRow>
            <Typography
                variant="body1"
                children={"Name"}
                sx={{ width: "40%" }}
            />
            <TextField
                value={name}
                variant="outlined"
                onChange={(e) => updateName(e)}
            />
        </FormRow>
    )
}
function BirthdateInput(props) {
    let { formBirthdate, updateBirthdate } = props

    console.log(`BirthdateInput has formBirthdate: ${formBirthdate}`);
    return (
        <FormRow>
            <Typography
                variant="body1"
                children={"Birthdate"}
                sx={{ width: "40%" }}
            />
            <TextField
                value={formBirthdate}
                variant="outlined"
                onChange={(e) => updateBirthdate(e)}
            />
        </FormRow>
    )
}
function OwnerInput(props) {
    let { formOwner, updateOwner } = props

    console.log(`OwnerInput has formOwner: ${formOwner}`);
    return (
        <FormRow>
            <Typography
                variant="body1"
                children={"Thumbnail URL"}
                sx={{ width: "40%" }}
            />
            <TextField
                value={formOwner}
                variant="outlined"
                onChange={(e) => updateOwner(e)}
            />
        </FormRow>
    )
}

function FormLabels() {
    return (
        <Box id="form_labels"
            sx={{
                flex: "0 0 35%",
                paddingLeft: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }} >
            <Typography
                variant="body1"
                children={"Thumbnail URL"}
            />
            <Typography
                variant="body1"
                children={"Name"}
            />
            <Typography
                variant="body1"
                children={"Birth date"}
            />
            <Typography
                variant="body1"
                children={"Owner"}
            />
        </Box>
    )
}
function FormInputs(props) {
    let { editedCat, updateName, updateURL, updateBirthdate, updateOwner } = props
    let { name, birthdate, owner_name, thumbnail_url } = editedCat

    console.log(`FORM INPUTS HAS DATA: ${JSON.stringify(editedCat, null, 4)}`);
    console.log(`name VALUE should be set to: ${name}`);
    let dateString = convertDateFormat(birthdate)

    return (
        <Box id="form_Inputs"
            sx={{
                flex: "1 1 65%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }} >
            <TextField
                value={thumbnail_url}
                variant="outlined"
                onChange={(e) => updateURL(e)}
            />
            <TextField
                value={name}
                onChange={(e) => updateName(e)}
                variant="outlined"
            />
            {/* <DatePicker
                        value={selectedCatData.birthdate}
                        variant="outlined"
                        onChange={(e) => updateBirthdat(e)}
            /> */}
            <TextField
                value={dateString}
                variant="outlined"
            />
            <TextField
                value={owner_name}
                variant="outlined"
                onChange={(e) => updateOwner(e)}
            />
        </Box>
    )
}

function SaveAndCancelButtons(props) {
    let { saveUpdates, editedCat, toggleEditModal } = props

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
                // onClick={() => { saveUpdates(editedCat) }}
                onClick={saveUpdates}
            />
            <Box sx={{ width: "0", height: "1.6rem", margin: "0.8rem 0.5rem", border: "solid black 1px" }} />
            <Button
                children="Cancel"
                onClick={toggleEditModal}
                sx={{ paddingRight: "2rem", }}
            />
        </Box>
    )
}



