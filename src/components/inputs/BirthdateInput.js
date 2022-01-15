import { React, useState } from 'react'
import { FormRow } from "./FormRow";

import { Box, Typography, TextField } from '@mui/material'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';


export function BirthdateInput(props) {
    let { formBirthdate, handleFormChange, handleDateChange } = props

    const [date, setDate] = useState(formBirthdate)

    return (
        <FormRow label={"Birthdate"} >
            <DesktopDatePicker
                name="birthdate"
                value={formBirthdate}
                onChange={(newDate) => {
                    setDate(newDate);
                }}
                onAccept={() => handleDateChange(date)}
                renderInput={(params) => <TextField {...params} />}
            />
            {/* <TextField
                name="birthdate"
                value={formBirthdate}
                variant="outlined"
                onChange={handleFormChange}
                fullWidth 
            /> */}
        </FormRow>
    )
}
