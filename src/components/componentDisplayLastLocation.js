import { DataGrid } from '@mui/x-data-grid';
import {useDispatch, useSelector} from "react-redux";
import {Grid} from "@mui/material";
import {removePlaceFromList} from "../redux/actions/action";
import ComponentDisplayCard from "./componentDisplayCard";

const ComponentDisplayLastLocation=()=>{
    const state = useSelector((state)=>state?.location)
    const dispatch = useDispatch()

    return (
        <Grid container spacing={2}>
            {
                state?.savedLocationList.map((d,i)=>{
                    return <ComponentDisplayCard location={d?.label} key={i} onDelete={()=>dispatch(removePlaceFromList(d?.id))} randomId={d?.randomId}/>
                })
            }
        </Grid>
    );
}

export default ComponentDisplayLastLocation