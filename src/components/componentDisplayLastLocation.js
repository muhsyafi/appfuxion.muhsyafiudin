import {useDispatch, useSelector} from "react-redux";
import {Grid} from "@mui/material";
import {getMarker, recenterMap, removePlaceFromList} from "../redux/actions/action";
import ComponentDisplayCard from "./componentDisplayCard";

const ComponentDisplayLastLocation=()=>{
    const state = useSelector((state)=>state?.location)
    const dispatch = useDispatch()

    return (
        <Grid container spacing={2} zIndex={100} position={'fixed'} bottom={0} left={0} padding={2}>
            {
                state?.savedLocationList.map((d,i)=>{
                    return <ComponentDisplayCard formattedAddress={d?.formatted_address} key={i} onDelete={()=>dispatch(removePlaceFromList(d?.place_id))} showOnMap={()=>{
                        const location = {
                            lat : d?.geometry?.location?.lat(),
                            long : d?.geometry?.location?.lng(),
                        }
                        dispatch(recenterMap(location))
                    }}/>
                })
            }
        </Grid>
    );
}

export default ComponentDisplayLastLocation