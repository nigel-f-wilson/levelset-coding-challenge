import {
    createTheme,
    responsiveFontSizes,
} from '@mui/material'

const theme = createTheme({
    components: {
        // MuiPaper: {
        //     styleOverrides: {  // Name of the slot
        //         root: {        // Some CSS
        //             backgroundColor: '#fff',
        //         },
        //     },
        // },
        // MuiIconButton: {
        //     styleOverrides: {
        //         root: {
        //             color: "#999",
        //             backgroundColor: "rgba(0, 0, 0, 0.0)",
        //             "&:hover": {
        //                 color: "#111",
        //                 backgroundColor: "rgba(0, 0, 0, 0.0)",
        //             },
        //         },
        //     },
        // },
        // MuiInput: {
        //     styleOverrides: {
        //         root: {
        //             borderBottom: "solid #ccc 1.5px",
        //             "&:focus": {
        //                 borderBottom: "solid red 1px"
        //             },
        //         },
        //         focussed: {
        //             borderBottom: "solid #000 1.5px"
        //         },
        //     },
        // }        
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
            padding: "0.2rem 1rem"
        }

    },
    transitions: {
        
    },
});

export default responsiveFontSizes(theme, { disableAlign: true, factor: 1.9 })
// https://mui.com/customization/theming/#responsivefontsizes-theme-options-theme