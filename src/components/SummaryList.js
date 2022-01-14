import { React, useMemo } from 'react'

import { convertDateFormat } from "../lowLevelHelpers"
import { Box, Avatar, Typography, List } from '@mui/material'
import { useTheme } from '@mui/styles'


export function SummaryList(props) {
    let { catList, viewCatDetails, searchString } = props
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
                            searchString={searchString}
                        />
                    )
                })
            }

        </List>
    )
}
function CatSummary(props) {
    let { cat, viewCatDetails, searchString } = props
    let { id, name, birthdate, thumbnail_url } = cat

    let primary = useTheme().palette.primary.main
    const dateString = useMemo(() => convertDateFormat(birthdate), [birthdate]);  // Could doing something simlar to Memoize the Avatar component improve performance vs. just passing it the url and asking it to refetch that image on every render. Is that what is currently happening? 

    let display = (nameIncludesSearchString(name, searchString)) ? 'flex' : 'none'
    function nameIncludesSearchString(name, searchString) {
        let includes = name.toLowerCase().includes(searchString.toLowerCase())
        console.log(`Name ${name} ${includes ? "DOES" : "does NOT"} include search string ${searchString} `);
        return includes
    }

    return (
        <Box
            onClick={() => viewCatDetails(id)}
            sx={{
                display: display,
                flexDirection: "column",
                padding: "1rem 2rem",
                border: `solid ${primary} 1px`,
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

 
 