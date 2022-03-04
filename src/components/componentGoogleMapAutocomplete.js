import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import {Autocomplete, Grid, TextField} from "@mui/material";
import {GOOGLE_MAP_API_KEY} from "../config/config";
import * as React from "react";
import store from "../redux/store";
import {addPlaceToList} from "../redux/actions/action";

const ComponentGoogleMapAutocomplete = () => {
    const {
        placePredictions,
        getPlacePredictions,
        isPlacePredictionsLoading,
    } = useGoogle({
        apiKey: GOOGLE_MAP_API_KEY,
    });

    store?.subscribe(()=>{
        console.log(store?.getState())
    })

    return (
        <Grid container spacing={0} direction={'column'} alignItems={'center'} justifyContent={'center'} style={{minHeight:'100vh'}}>
            <Grid item xs={3}>
                <div style={{color:'#1572A1', width:512, height:512, marginTop:32}}>
                    <Autocomplete
                        loading={isPlacePredictionsLoading}
                        renderInput={(d)=>
                            <TextField
                                {...d}
                                label={"Type to search location"}
                                onChange={(v)=>{
                                    getPlacePredictions({input:v.target?.value})}}
                            />}
                        options={placePredictions.map((d)=>{
                            return {
                                label:d?.description,
                                id: d?.place_id,
                            }})}
                        onChange={(event, newValue) => {
                            store?.dispatch(addPlaceToList(newValue))
                        }}
                    />
                </div>
            </Grid>
        </Grid>
    );
}

export default ComponentGoogleMapAutocomplete