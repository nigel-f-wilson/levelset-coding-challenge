import { React, useState } from 'react'

// MUI components
import { Box, Typography, Dialog, Button, IconButton, TextField } from '@mui/material'
import DatePicker from '@mui/lab/DatePicker';
import CloseIcon from '@mui/icons-material/Close';

export function EditModal(props) {
    let { open, selectedCatData, toggleEditModal, saveUpdates } = props
    // let { id, name, birthdate, owner_name, thumbnail_url } = selectedCatData

    let [catData, setCatData] = useState({selectedCatData})

    let [editedCat, setEditedCat] = useState({ selectedCatData })


    function updateLocalCatData() {
        
    }

    // const handleUpdate = (todo) => {
    //     setTodos({ ...todos, [todo.id]: todo });
    // }
    // const update = (value) => {
    //     setCatData({ ...catData, [catData]: value });
    // }
    const updateName = (event) => {
        setCatData({ ...catData, [catData.name]: event.target.value });
    }

    // COPIED
    // function handleNameStringChange(event) {
    //     setNameSearchString(event.target.value.toLowerCase())
    // }
    
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
                catData={catData}
            />
            <SaveAndCancelButtons 
                saveUpdates={saveUpdates}
                editedCat={editedCat}
                toggleEditModal={toggleEditModal}
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
    let { catData } = props

    return (
        <Box sx={{
            height: "550px",
            display: "flex",
            padding: "0 1rem"
        }} >
            <FormLabels />
            <FormInputs
                catData={catData}
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
    let { catData } = props
    let { id, name, birthdate, owner_name, thumbnail_url } = catData


    console.log(`FORM INPUTS HAS DATA: ${JSON.stringify(catData, null, 4)}`);

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

            />
            <TextField
                value={name}
                // onChange={updateName}
                variant="outlined"



            />
            {/* <DatePicker
                        value={catData.birthdate}
                        variant="outlined"
                        onChange={}



                    /> */}
            <TextField
                value="Test"
                variant="outlined"



            />
            <TextField
                value="Test"
                variant="outlined"



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
                onClick={() => { saveUpdates(editedCat) }}
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



