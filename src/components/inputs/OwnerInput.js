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
                    <MenuItem value="Claire Morrison" >Claire Morrison</MenuItem>
                    <MenuItem value="Jane Doe" >Jane Doe</MenuItem>
                    <MenuItem value="Jane Smith" >Jane Smith</MenuItem>
                    <MenuItem value="John Doe" >John Doe</MenuItem>
                    <MenuItem value="Kate Debarros" >Kate Debarros</MenuItem>
                    <MenuItem value="Sam Jones" >Sam Jones</MenuItem>
                </Select>
            </FormControl>
        </FormRow>
    )
}

