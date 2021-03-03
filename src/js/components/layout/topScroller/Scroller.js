import React from "react";
import { Fab, makeStyles, Slide, Zoom} from "@material-ui/core";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import {useScrollTrigger} from "@material-ui/core"

const useStyles = makeStyles(theme =>({
    scroller:{
        position:"fixed",
        [theme.breakpoints.down("sm")]:{
            bottom:theme.spacing(10),
            right:theme.spacing(2), 
        },
        [theme.breakpoints.down('xs')]:{
            bottom:theme.spacing(9),
            right:theme.spacing(2), 
        },
        bottom:theme.spacing(2),
        right:theme.spacing(2),
        zIndex:9
    }
}))

export const Scroll = props =>{
    const trigger = useScrollTrigger({
        target: window ,
        disableHysteresis: true,
        threshold: 100,
    })
    const handleClick = event =>{
        const author = document.querySelector(props.target);
        author.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
    const classes = useStyles()
    return (
        <Slide in={trigger} direction="up" >
            <Fab color="secondary" size="small" onClick={handleClick} className={classes.scroller}>
                <ArrowUpwardIcon/>
            </Fab>
        </Slide>
        
    )
}