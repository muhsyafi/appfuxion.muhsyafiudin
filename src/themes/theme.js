import { createTheme } from '@mui/material/styles';

/** Custom theme color for button*/
const theme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#C6D57E',
            main: '#1572A1',
            dark: '#694E4E',
            contrastText: '#fff',
        },
        danger: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#fff',
        },
    },
});

export default theme