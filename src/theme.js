import {
    createTheme,
    responsiveFontSizes,
} from '@mui/material'

const theme = createTheme({
    components: {
        MuiTextField: {
            styleOverrides: {  
                root: {         
                    height: "80px"
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: "#222"
                },
            },
        },
    },
    palette: {
       
    },
    breakpoints: {
        
    },
    typography: {
        h3: {
            padding: "1rem"
        },
        h4: {
            padding: "0.2rem 1rem",
            fontSize: "2rem"
        },
        h5: {
            padding: "0.2rem 1rem",
            fontSize: "1.5rem"
        },
        button: {
            textTransform: "none",
            fontSize: "1.5rem",

        },
        body1: {
            lineHeight: "80px",
            fontSize: "1.5rem"
        },

    },
    transitions: {
        
    },
});

export default responsiveFontSizes(theme, { disableAlign: true, factor: 1.9 })
// https://mui.com/customization/theming/#responsivefontsizes-theme-options-theme