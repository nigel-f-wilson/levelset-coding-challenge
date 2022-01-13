import {
    createTheme,
    responsiveFontSizes,
} from '@mui/material'

const theme = createTheme({
    components: {
        
    },
    palette: {
        primary: {
            light: '#000',
            main: '#222',
            dark: '#000',
            contrastText: '#000'
        }
    },
    breakpoints: {
        
    },
    typography: {
        h3: {
            padding: "1rem"
        },
        h5: {
            padding: "0.2rem 1rem",
            fontSize: "1.5rem"
        },
        button: {
            textTransform: "none",
            fontSize: "1.5rem"

        }

    },
    transitions: {
        
    },
});

export default responsiveFontSizes(theme, { disableAlign: true, factor: 1.9 })
// https://mui.com/customization/theming/#responsivefontsizes-theme-options-theme