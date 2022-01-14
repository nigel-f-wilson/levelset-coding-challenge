import { React, useState } from 'react'

// MUI components
import { Box, Typography, Dialog, Button, IconButton, TextField } from '@mui/material'
import DatePicker from '@mui/lab/DatePicker';
import CloseIcon from '@mui/icons-material/Close';

export function EditModal(props) {
    let { open, selectedCatData, toggleEditModal, saveUpdates } = props
    // let { id, name, birthdate, owner_name, thumbnail_url } = selectedCatData

    // let [editedCat, setEditedCat] = useState({...selectedCatData})
    let [editedCat, setEditedCat] = useState(Object.assign({}, selectedCatData))

    console.log(`EDIT MODAL HAS SELECTED: ${JSON.stringify(selectedCatData, null, 4)}`);
    console.log(`EDIT MODAL HAS EDITED: ${JSON.stringify(editedCat, null, 4)}`);

    const updateName = (event) => {
        setEditedCat({...editedCat, name: event.target.value})
    }
    const updateURL = (event) => {
        setEditedCat({ ...editedCat, thumbnail_url: event.target.value })
    }
    const updateBirthdate = (event) => {
        setEditedCat({ ...editedCat, birthdate: event.target.value })
    }
    const updateOwner = (event) => {
        setEditedCat({ ...editedCat, owner_name: event.target.value })
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

            }}
            sx={{


                margin: "0"
            }}>
            <Header 
                toggleEditModal={toggleEditModal}
            />
            <Form 
                selectedCatData={selectedCatData}
                saveUpdates={saveUpdates}
                editedCat={editedCat}
                toggleEditModal={toggleEditModal}
                editedCat={editedCat}
                updateName={updateName}
                updateURL={updateURL}
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
    let { editedCat, saveUpdates, toggleEditModal, updateName,
    updateURL, updateBirthdate, updateOwner } = props

    return (
        <Box sx={{
            height: "550px",
            display: "flex",
            flexDirection: "column"
        }} >
            <Box sx={{
                height: "550px",
                display: "flex",
                padding: "0 1rem"
            }} >
                <FormLabels />
                <FormInputs
                    editedCat={editedCat}
                    updateName={updateName}
                    updateURL={updateURL}
                    updateBirthdate={updateBirthdate}
                    updateOwner={updateOwner}
                />
            </Box>
            <SaveAndCancelButtons 
                saveUpdates={saveUpdates} 
                editedCat={editedCat} 
                toggleEditModal={toggleEditModal}       
            />
        </Box>
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
    let { id, name, birthdate, owner_name, thumbnail_url } = editedCat


    console.log(`FORM INPUTS HAS DATA: ${JSON.stringify(editedCat, null, 4)}`);

    console.log(`name VALUE should be set to: ${name}`);


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
                        onChange={}



                    /> */}
            <TextField
                value="Test"
                variant="outlined"
                // onChange={(e) => updateName(e)}



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

            // onClick={saveUpdates(editedCat)}
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



