import { React, useState } from 'react'
import { FormRow } from "./FormRow";

// MUI components
import {TextField } from '@mui/material'

export function BirthdateInput(props) {
    let { formBirthdate, handleFormChange, handleDateChange } = props

    const [date, setDate] = useState(formBirthdate)

    return (
        <FormRow label={"Birthdate"} >
            {/* <DesktopDatePicker
                name="birthdate"
                value={formBirthdate}
                onChange={(newDate) => {
                    setDate(newDate);
                }}
                onAccept={() => handleDateChange(date)}
                renderInput={(params) => <TextField {...params} />}
            />
            <Box sx={{ width: "4rem" }} /> */}
            <TextField
                name="birthdate"
                value={formBirthdate}
                variant="outlined"
                onChange={handleFormChange}
                fullWidth 
            />
        </FormRow>
    )
}
