import { Box, createMuiTheme, CssBaseline, Grid, Hidden, MuiThemeProvider, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { FooterComponent } from './layout/footer.component';
import  HeaderComponent  from './layout/header.component';
import  GalleryPageComponent  from './pages/gallery/galleryPage.component';
import  HomePageComponent  from './pages/homePage.component';
import { NoMatchPageComponent } from './pages/noMatch.component';
import {makeStyles} from "@material-ui/core";
import {connect} from "react-redux"



const useStyles = makeStyles(theme => ({
    offset:{
        minHeight: theme.mixins.toolbar.minHeight + 8,
        width:"100vw",
    }, 
    mainBox:{
        flexGrow:1,
        display:"flex",
        flexDirection:"column",
        // backgroundColor:theme.palette.background.default,

    },
    grow:{
        flexGrow:1
    },
    space:{
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
}))

 const AppComponent = props =>{
    const lightTheme = createMuiTheme({
        palette:{
            type:"light"
        }
    })
    const darkTheme = createMuiTheme({
        palette:{
            type:"dark"
        }
    })
    const classes = useStyles();
     
    
    
        return(
            <MuiThemeProvider theme={props.themeMode?darkTheme:lightTheme}>
                <CssBaseline/>
                <Router >
                    
                    <Box className={classes.mainBox} > 
                    <Grid container direction="column" className={classes.grow} >
                        <Grid item xs={12}>
                            <HeaderComponent  />                            
                        </Grid>
                        <Grid item container xs={12} className={classes.space} >
                            <Grid item xs={false}  md={2} />
                            <Grid item xs={12} sm={12} md={8} >
                               <Switch>
                                <Route exact path="/" component = {HomePageComponent} />
                                <Route path="/gallery" component = {GalleryPageComponent} />
                                <Route path="*" component = {NoMatchPageComponent} />    
                            </Switch> 
                            </Grid>
                            <Grid item xs={false}  md={2} />
                            <Hidden implementation="css" mdUp >
                                <Grid item xs={12} className={classes.offset} >
                                </Grid>
                            </Hidden>
                        </Grid>
                        
                    </Grid>
                    </Box>
                    
                </Router>
            </MuiThemeProvider>
                
                
        )
    
}

const mapStateToProps = store =>{
    return {
        themeMode:store.main.themeMode
    }
}

export default connect(mapStateToProps)(AppComponent)