import { React } from 'react'
import { FormRow } from "./FormRow";
import { Select, MenuItem, FormControl } from '@mui/material'

export function OwnerInput(props) {
    let { formOwner, handleFormChange } = props

    let owners = ["Claire Morrison", "Jane Doe", "Jane Smith", "John Doe", "Kate Debarros", "Sam Jones"]

    return (
        <FormRow label="Owner"  >
            <FormControl fullWidth >
                <Select
                    name="owner_name"
                    labelId="select-owner"
                    id="select-owner"
                    value={formOwner}
                    onChange={handleFormChange}
                >
                    {owners.map((owner, index) => {
                        return (
                            <MenuItem key={index} value={owner} >{owner}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </FormRow>
    )
}

