import { React } from 'react'
import { FormRow } from "./FormRow";
import { Typography, TextField } from '@mui/material'

export function NameInput(props) {
    let { formName, handleFormChange } = props
    return (
        <FormRow label={"Name"} >
            <TextField
                name="name"
                value={formName}
                variant="outlined"
                onChange={handleFormChange}
                fullWidth 
            />
        </FormRow>
    )
}

