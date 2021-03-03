import React from "react";
import {Typography, Card,CardActionArea,CardActions,CardContent,CardMedia, Button, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme =>{

})

export const GalleryCard = props =>{

    const classes = useStyles()

    return(
        <Card>
            <CardActionArea href={props.href}>
                <CardMedia
                    className={classes.media}
                    image={props.thumbnail}
                    title="Contemplative Reptile"
                    style={{
                        height:200
                    }}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="secondary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )
}