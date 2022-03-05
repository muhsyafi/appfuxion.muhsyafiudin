import {Autocomplete, TextField} from "@mui/material";
import * as React from "react";
import {getMapPrediction, getMarker} from "../redux/actions/action";
import {useDispatch, useSelector} from "react-redux";

const ComponentGoogleMapAutocomplete = () => {
    const dispatch = useDispatch();
    const state = useSelector(state=>state?.location)


    return (
        <div style={{width:512, marginBottom:16, backgroundColor:'#fff', boxShadow:'inherit' }}>
            <Autocomplete
                isOptionEqualToValue={(option, value)=>option.id===value.id}
                loading={false}
                renderInput={(d)=>
                    <TextField
                        {...d}
                        label={"Type to search location"}
                        onChange={(event)=>{
                            dispatch(getMapPrediction(event?.target?.value))
                        }}
                    />}
                options={state?.locationList.map((d,i)=>{
                    return {
                        label:d?.description,
                        id: d?.place_id,
                        randomId : Math.floor((Math.random()*1000) + 1)
                    }})}
                onChange={(event, newValue) => {
                    if(newValue){
                        dispatch(getMarker(newValue?.id))
                    }
                }}
            />
        </div>
    );
}

export default ComponentGoogleMapAutocomplete