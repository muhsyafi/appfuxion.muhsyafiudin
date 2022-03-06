import {Button, Card, CardActions, CardContent, Grid, Typography} from "@mui/material";
import * as React from "react";

const ComponentDisplayCard=(props)=>{

    /** Check the address is undefined or not
     * Address is not empty because get from auto complete or from click on map where location is register at google
     * Undefined address is usually from click on map where location not register on google place
     * If address undefined set address to lat long as string
     * */
    let header = ''
    let address = props?.address
    if(address){
        header = address.length > 32 ? address?.substring(0,32) : address
    }else{
        header = JSON.stringify(props?.location)
    }
    return <Grid item xs={6} sm={6} md={4} lg={4} xl={2} style={{display: 'flex', justifyContent:'space-evenly'}}>
        <Card style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', width:'100%'}} sx={{boxShadow:3}}>
            <CardContent>
                <Typography gutterBottom variant="h8" component="div">
                    {header}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    place_id : {props?.placeId || '-'}
                </Typography>
            </CardContent>
            <CardActions style={{display:'flex', justifyContent:'space-evenly'}}>
                <Button style={{width:'100%'}} color={'danger'} variant={'contained'} size="small" onClick={props?.onDelete}>Delete</Button>
                <Button style={{width:'100%'}} color={'primary'} variant={'contained'} size="small" onClick={props?.showOnMap}>Show on Map</Button>
            </CardActions>
        </Card>
    </Grid>
}

export default ComponentDisplayCard