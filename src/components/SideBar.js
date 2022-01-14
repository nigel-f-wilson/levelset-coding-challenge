import { React } from 'react'
import { SummaryList } from "./SummaryList"
import { Box, TextField } from '@mui/material'

import { useTheme } from '@mui/styles';

export function SideBar(props) {
    let { searchString, handleSearchStringChange, catList, viewCatDetails } = props
    return (
        <Box sx={{
            width: "35%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
        }}>
            <SearchBox
                searchString={searchString}
                handleSearchStringChange={handleSearchStringChange}
            />
            <SummaryList
                catList={catList}
                viewCatDetails={viewCatDetails}
                searchString={searchString}
            />
        </Box>
    )
}

function SearchBox(props) {
    let { searchString, handleSearchStringChange } = props
    let primary = useTheme().palette.primary.main

    return (
        <Box sx={{
            height: "25%",
            border: `solid ${primary} 1px`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

        }}>

            <TextField
                autoFocus
                key="name-search"
                id="name-search"
                value={searchString}
                onChange={handleSearchStringChange}
                autoComplete='off'
                placeholder="Search by name"
                type="search"
                variant="outlined"
                sx={{ width: "80%" }}
                InputProps={{
                    sx: {
                        fontSize: "1.1rem",
                    }
                }}
            />
        </Box>
    )
}
