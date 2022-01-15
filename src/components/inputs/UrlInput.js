import { React } from 'react'
import { FormRow } from "./FormRow";
import { Typography, TextField  } from '@mui/material'

export function UrlInput(props) {
    let { formUrl, handleFormChange } = props
    return (
        <FormRow label={"Thumbnail URL"} >
            <TextField
                name="thumbnail_url"
                value={formUrl}
                variant="outlined"
                onChange={handleFormChange}
                fullWidth 
            />
        </FormRow>
    )
}