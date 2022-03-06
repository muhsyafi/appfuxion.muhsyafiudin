import {useDispatch, useSelector} from "react-redux";
import {Grid} from "@mui/material";
import {recenterMap, removePlaceFromList} from "../redux/actions/action";
import ComponentDisplayCard from "./componentDisplayCard";
import ComponentLoader from "./componentLoader";

const ComponentDisplayLastLocation=()=>{
    const state = useSelector((state)=>state?.location)
    const dispatch = useDispatch()

    return (
        <Grid container spacing={2} zIndex={100} position={'fixed'} bottom={0} left={0} padding={2}>
            {
                state?.savedLocationList.map((d,i)=>{
                    return <ComponentDisplayCard placeId={d?.place_id} location={d?.location} address={d?.address} key={i} onDelete={()=>dispatch(removePlaceFromList(d?.place_id))} showOnMap={()=>{
                        dispatch(recenterMap(d?.location,13))
                    }}/>
                })
            }
            {state?.loading && <ComponentLoader/>}
        </Grid>
    );
}

export default ComponentDisplayLastLocation