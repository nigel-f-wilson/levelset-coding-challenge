import { React, useState, useMemo } from 'react'
import { useTheme } from '@mui/styles';

import { convertDateFormat } from "../lowLevelHelpers";


// MUI components
import { Box, Avatar, Typography, List } from '@mui/material'


export function SummaryList(props) {
    let { catList, viewCatDetails } = props
    return (
        <List sx={{
            height: "75%",
            padding: "0 0 2rem",
            overflowY: "scroll"
        }}>
            {
                catList.map(cat => {
                    return (
                        <CatSummary
                            key={cat.id}
                            cat={cat}
                            viewCatDetails={viewCatDetails}
                        />
                    )
                })
            }

        </List>
    )
}
function CatSummary(props) {
    let { cat, viewCatDetails } = props
    let { id, name, birthdate, owner_name, thumbnail_url } = cat

    let primary = useTheme().palette.primary.main

    const dateString = useMemo(() => convertDateFormat(birthdate), [birthdate]);  // Could doing something simlar to Memoize the Avatar component improve performance vs. just passing it the url and asking it to refetch that image on every render. Is that what is currently happening? 

    return (
        <Box
            onClick={() => viewCatDetails(id)}
            sx={{
                // height: "25vh",
                border: `solid ${primary} 1px`,
                display: "flex",
                flexDirection: "column",
                padding: "1rem 2rem"

            }}>
            <Box sx={{ display: "flex", }}>
                <Avatar
                    variant="square"    
                    alt={name}
                    src={thumbnail_url}
                    sx={{
                        border: 'solid #bbb 1px',
                        width: '6rem',
                        height: '6rem',
                    }}
                />
                <Typography variant="h3" children={name}  />

            </Box>
            <Typography variant="h5" children={dateString} sx={{ padding: "1rem 1rem 0rem" }} />
        </Box>
    )
}

 
 