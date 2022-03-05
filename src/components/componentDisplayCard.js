import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

const ComponentDisplayCard=()=>{
    return <Card sx={{ maxWidth: 256 }}>
        <CardMedia
            component="img"
            alt="green iguana"
            height="128"
            image="https://picsum.photos/300/200"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </Typography>
        </CardContent>
        <CardActions>
            <Button color={'danger'} variant={'contained'} size="small">Delete</Button>
        </CardActions>
    </Card>
}

export default ComponentDisplayCard