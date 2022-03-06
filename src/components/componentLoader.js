import {Card, CardContent, Grid, Skeleton} from "@mui/material";
import * as React from "react";

const ComponentLoader=()=>{
    return <Grid item xs={6} sm={6} md={4} lg={4} xl={2} style={{display: 'flex', justifyContent:'space-evenly'}}>
        <Card style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', width:'100%'}} sx={{boxShadow:3}}>
            <CardContent style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
                <Skeleton height={32} />
                <Skeleton height={32} />
                <Skeleton height={32} />
            </CardContent>
        </Card>
    </Grid>
}

export default ComponentLoader