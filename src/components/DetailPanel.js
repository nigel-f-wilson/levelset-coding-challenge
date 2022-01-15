import { React } from 'react'

import { convertDateFormat } from "../lowLevelHelpers";
// MUI components
import { Box, Typography, Button } from '@mui/material'

export function DetailPanel(props) {
    let { selectedCatData, toggleEditModal, toggleConfirmDeleteModal, deleteCat } = props

    return (
        <Box sx={{
            width: "65%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "4rem 0rem"
        }}>
            <Details 
                selectedCatData={selectedCatData}
            />
            <Buttons
                toggleEditModal={toggleEditModal}
                deleteCat={deleteCat}
                selectedCatId={selectedCatData.id}
                selectedCatData={selectedCatData}
                toggleConfirmDeleteModal={toggleConfirmDeleteModal}
            />
        </Box>
    )
}

function Details(props) {
    let { id, name, thumbnail_url, birthdate, owner_name, views_count } = props.selectedCatData
    
    // const dateString = useMemo(() => convertDateFormat(birthdate), [birthdate])  
    const dateString = convertDateFormat(birthdate) 

    if (id) {
        return (
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                width: "70%",
                flex: "1 0 70%"
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
                <Typography variant="h5" children={`Birthdate: ${dateString}`} />
                <Typography variant="h5" children={`Owner: ${owner_name}`} />
                <Typography variant="h5" children={`Number of views: ${views_count}`} />
            </Box>
        )
    }
    else {
        return (
            <Typography variant="h3" children="Please Select a Cat" />
        )
    }
}

function Buttons(props) {
    let { toggleEditModal, toggleConfirmDeleteModal, selectedCatData } = props
    
    let display = (selectedCatData.id) ? "flex" : "none"
    return (
        <Box 
            sx={{
                display: display,
                width: '100%',
                flex: "0 0 30%",
                justifyContent: "flex-end",
                alignItems: "flex-start",
                paddingRight: "15%"
            }}
        >
            <Button 
                children="Edit"
                onClick={() => toggleEditModal()}
            />
            <Box sx={{ width: "0", height: "1.6rem", margin: "0.8rem 0.5rem", borderRight: "solid black 2px" }} />
            <Button
                children="Delete"
                onClick={() => toggleConfirmDeleteModal()}
            />
        </Box>
    )
}


