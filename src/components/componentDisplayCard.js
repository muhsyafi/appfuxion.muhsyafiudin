import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import * as React from "react";

const ComponentDisplayCard=(props)=>{
    return <Grid item xs={12} sm={6} md={6} lg={4} xl={2}>
        <Card>
            <CardMedia
                component="img"
                alt="green iguana"
                height="128"
                image={`https://picsum.photos/id/${props?.randomId}/300/200`}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props?.location?.length  > 16 ? `${props?.location?.substring(0,16)}...` : props?.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </Typography>
            </CardContent>
            <CardActions>
                <Button color={'danger'} variant={'contained'} size="small" onClick={props?.onDelete}>Delete</Button>
            </CardActions>
        </Card>
    </Grid>
}

export default ComponentDisplayCard