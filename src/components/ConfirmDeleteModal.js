import { React, useState } from 'react'

// MUI components
import { Box, Typography, Dialog, Button, IconButton, } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

export function ConfirmDeleteModal(props) {
    let { open, selectedCatData, toggleConfirmDeleteModal, deleteCat } = props
    // let { id, name, birthdate, owner_name, thumbnail_url } = selectedCatData

    let [catData, setCatData] = useState({ selectedCatData })


    return (
        <Dialog
            open={open}
            onClose={toggleConfirmDeleteModal}
            PaperProps={{
                sx: {
                    width: "1000px",
                    height: "625px",
                    borderRadius: 4,
                    overflowX: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }
            }}>
            <Header />
            <Prompt />
            <YesAndNoButtons />

        </Dialog>
    )

    function Header() {
        return (
            <Box sx={{
                width: "95%",
                height: "75px",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                padding: "0 1rem"

            }} >
                <IconButton
                    children={<CloseIcon />}
                    onClick={toggleConfirmDeleteModal}
                />
            </Box>
        )
    }

    function Prompt() {
        return (
            <Box sx={{
                height: "400px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0 4rem"

            }} >
                <Typography variant="h3" 
                    align="center"
                    children={`Are you sure you want to delete ${selectedCatData.name}?`} />

            </Box>
        )
    }
    


    function YesAndNoButtons() {
        return (
            <Box
                sx={{
                    display: "flex",
                    width: '70%',
                    height: "225px",
                    justifyContent: "space-around",
                    alignItems: "flex-start",
                }}
            >
                <Button
                    variant="contained"
                    color="error"
                    children="No"
                    onClick={toggleConfirmDeleteModal}
                    size="large"
                    sx={{ width: "120px", color: "common.white" }}
                />
                <Button
                    variant="contained"
                    color="success"
                    children="Yes"
                    onClick={() => {
                        deleteCat(selectedCatData.id)
                        // toggleConfirmDeleteModal()
                    }}
                    sx={{ width: "120px", color: "common.white" }}
                />
            </Box>
        )
    }

}



