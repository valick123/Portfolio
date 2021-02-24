import { Divider, Grid} from '@material-ui/core';
import Iframe from "react-iframe";
import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
        map:{
                width:"auto",
                maxHeight:"120px",
                border:"none",
                borderRadius:theme.shape,
                
        }
}))

export const FooterComponent = props =>{  
        
        const classes = useStyles();

        return(
                <Grid container>
                        <Divider/>
                        <Grid item md={2}>
                                copyrights
                        </Grid>
                        <Grid item md={6}>
                               
                                
                        </Grid>
                        <Grid item md={4}>
                        <Iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1174.3536667223639!2d27.580030783709592!3d53.936943180285645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf6e354036cb%3A0x43d37ca7115c1332!2sBogdanovicha%20Maksima%20155%2C%20Minsk!5e0!3m2!1sen!2sby!4v1613641427105!5m2!1sen!2sby" 
                                // width="400" 
                                className={classes.map}
                                frameBorder="0" 
                                allowFullScreen="" 
                                aria-hidden="false" 
                                tabIndex="0"
                        />
                        </Grid>
                </Grid>
        )
        
}