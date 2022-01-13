import { React } from 'react'

// MUI components
import { Box, Typography, Dialog, Button, IconButton, Icon } from '@mui/material'
import DatePicker from '@mui/lab/DatePicker';
import CloseIcon from '@mui/icons-material/Close';

export function EditModal(props) {
    let { open, selectedCatData, toggleEditModal } = props
    
    
    
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
            <Header />
            <Form 
            />

        </Dialog>
    )

    function Header() {
        return (
            <Box sx={{
                borderBottom: "solid #888 1px",
                height: "75px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 1rem"

            }} >
                <Typography variant="h5" children="Edit Cat" />
                <IconButton
                    children={<CloseIcon />}
                    onClick={toggleEditModal}
                />
            </Box>
        )
    }

    function Form(props) {
        let {   } = props

        return (
            <Box sx={{
                height: "550px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 1rem"

            }} >
                <Typography variant="h5" children="Edit Cat" />
                <Buttons

                />
            </Box>
        )

        function Buttons(props) {
            return (
                <Box
                    sx={{
                        display: "flex",
                        width: '100%',
                        height: "75px",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        padding: "0 10%",
                        borderTop: "solid #888 1px",

                    }}
                >
                    <Button
                        children="Save"
                    // onClick={() => toggleEditModal()}
                    />
                    <Box sx={{ width: "0", height: "1.6rem", margin: "0.8rem 0.5rem", border: "solid black 1px" }} />
                    <Button
                        children="Cancel"
                        onClick={toggleEditModal}
                    />
                </Box>
            )
        }
    }

}



