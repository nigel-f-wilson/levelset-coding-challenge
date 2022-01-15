import { React } from 'react'
import { FormRow } from "./FormRow";

import { TextField } from '@mui/material'
import { convertDateFormat } from '../../lowLevelHelpers';

export function BirthdateInput(props) {
    let { formBirthdate, handleFormChange } = props

    let dateString = convertDateFormat(formBirthdate)
    console.log(`Form BD: ${formBirthdate}`);

    return (
        <FormRow label={"Birthdate"} >
            <TextField
                name="birthdate"
                value={formBirthdate}
                variant="outlined"
                onChange={handleFormChange}
                id="date"
                type="date"
                fullWidth
                // Still trying to get this to display this string as "dd mon yyyy" instead of "mm/dd/yyyy"
                // InputProps={{
                //     valueAsDate: dateString,
                // }}  
            />
        </FormRow>
    )
}
