import './App.css';
import * as React from 'react';
import ComponentGoogleMapAutocomplete from "./components/componentGoogleMapAutocomplete";
import ComponentDisplayLastLocation from "./components/componentDisplayLastLocation";
import {Grid, ThemeProvider} from "@mui/material";
import theme from "./themes/theme";

function App() {
    return <div style={{marginTop:16}}>
        <ThemeProvider theme={theme}>
            <Grid container direction={'column'} alignItems={'center'} justifyContent={'center'} color={"primary"}>
                <Grid item xs={3}>
                    <ComponentGoogleMapAutocomplete/>
                </Grid>
                <Grid item xs={3}>
                    <ComponentDisplayLastLocation/>
                </Grid>
            </Grid>
        </ThemeProvider>
    </div>
}

export default App;
