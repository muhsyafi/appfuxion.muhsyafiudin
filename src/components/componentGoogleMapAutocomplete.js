import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import {Autocomplete, Grid, TextField} from "@mui/material";
import {GOOGLE_MAP_API_KEY} from "../config/config";
import * as React from "react";
import {addPlaceToList} from "../redux/actions/action";
import { useDispatch} from "react-redux";

const ComponentGoogleMapAutocomplete = () => {
    const dispatch = useDispatch();

    const {
        placePredictions,
        getPlacePredictions,
        isPlacePredictionsLoading,
    } = useGoogle({
        apiKey: GOOGLE_MAP_API_KEY,
    });


    return (
        <div style={{width:512, marginBottom:16 }}>
            <Autocomplete
                isOptionEqualToValue={(option, value)=>option.id===value.id}
                loading={isPlacePredictionsLoading}
                renderInput={(d)=>
                    <TextField
                        {...d}
                        label={"Type to search location"}
                        onChange={(event)=>{
                            getPlacePredictions({input:event?.target?.value})}}
                    />}
                options={placePredictions.map((d)=>{
                    console.log(d?.reference)
                    return {
                        label:d?.description,
                        id: d?.place_id,
                    }})}
                onChange={(event, newValue) => {
                    if(newValue) return dispatch(addPlaceToList(newValue))
                }}
            />
        </div>
    );
}

export default ComponentGoogleMapAutocomplete