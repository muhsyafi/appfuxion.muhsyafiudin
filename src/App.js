import * as React from 'react';
import ComponentGoogleMapAutocomplete from "./components/componentGoogleMapAutocomplete";
import ComponentDisplayLastLocation from "./components/componentDisplayLastLocation";
import {Grid, ThemeProvider} from "@mui/material";
import theme from "./themes/theme";
import ComponentDisplayMap from "./components/componentDisplayMap";

function App() {
    return <div style={{}}>
        <ThemeProvider theme={theme}>
            <Grid container direction={'column'} alignItems={'center'} justifyContent={'center'} color={"primary"}>
                <Grid item xs={3} position={'absolute'} zIndex={99} top={16}>
                    <ComponentGoogleMapAutocomplete/>
                </Grid>
                <ComponentDisplayMap/>
                <ComponentDisplayLastLocation/>
            </Grid>
        </ThemeProvider>
    </div>
}

export default App;
