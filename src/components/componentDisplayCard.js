import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import * as React from "react";

const ComponentDisplayCard=(props)=>{
    return <Grid item xs={12} sm={6} md={6} lg={4} xl={2}>
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props?.formattedAddress?.length  > 16 ? `${props?.formattedAddress?.substring(0,16)}...` : props?.formattedAddress}
                </Typography>
            </CardContent>
            <CardActions>
                <Button color={'danger'} variant={'contained'} size="small" onClick={props?.onDelete}>Delete</Button>
                <Button color={'primary'} variant={'contained'} size="small" onClick={props?.showOnMap}>Show on Map</Button>
            </CardActions>
        </Card>
    </Grid>
}

export default ComponentDisplayCard