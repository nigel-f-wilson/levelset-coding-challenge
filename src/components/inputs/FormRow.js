import { React } from 'react'
import { Box, Typography } from '@mui/material'

export function FormRow(props) {
    let { label, children } = props
    return (
        <Box id="form_row"
            sx={{
                width: "100%",
                height: "120px",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center"
            }} >
            <Typography
                variant="body1"
                children={label}
                sx={{ flex: "0 0 35%", paddingLeft: "5%" }}
            />
            <Box 
                children={children}                
                sx={{ flex: "0 0 55%" }}
            />
        </Box>
    )
}





