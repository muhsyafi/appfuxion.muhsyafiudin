import { DataGrid } from '@mui/x-data-grid';
import {useDispatch, useSelector} from "react-redux";
import {Button} from "@mui/material";
import {removePlaceFromList} from "../redux/actions/action";
import ComponentDisplayCard from "./componentDisplayCard";

const ComponentDisplayLastLocation=()=>{
    const state = useSelector((state)=>state?.location)
    const dispatch = useDispatch()

    const columns = [
        {
            field: 'delete',
            headerName: 'Delete',
            sortable:false,
            width: 120,
            renderCell:(params)=>{
                const onClick = (e)=>{
                    e.stopPropagation()
                    dispatch(removePlaceFromList(params?.id))
                }
                return <Button color={"danger"} variant={"contained"} onClick={onClick}>Delete</Button>
            }
        },
        { field: 'label', headerName: 'Location', width: 320 },
    ];

    return (
        <div style={{ height: 400, width:512, }}>
            <DataGrid rows={state?.savedLocationList} columns={columns} pageSize={5} rowsPerPageOptions={[5]}/>
            <ComponentDisplayCard/>
        </div>
    );
}

export default ComponentDisplayLastLocation