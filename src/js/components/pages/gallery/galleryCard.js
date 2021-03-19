import React from "react";
import {Typography, Card,CardActionArea,CardActions,CardContent,CardMedia, Button, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme =>({
    media:{
        minHeight:200
    },
    cardFlex:{
        display:"flex",
        flexDirection:"column",        
        height:"100%",
    },
    grow:{
        flexGrow:1
    }
}))

export const GalleryCard = props =>{

    const classes = useStyles()

    return(
        <Card className={classes.cardFlex} > 
            <CardActionArea className={classes.grow} href={props.info.siteLink} target="_blank">
                <CardMedia
                    className={classes.media}
                    image={props.info.thumbnailLink}
                    title="Contemplative Reptile"
                    
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.info.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.info.description}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="secondary" href={props.info.siteLink} target="_blank" >
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )
}