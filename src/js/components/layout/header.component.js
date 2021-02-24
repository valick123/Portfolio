import { AppBar, IconButton, Toolbar, Typography, Hidden, Paper, LinearProgress } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from "@material-ui/core";
import React from 'react';
import { withRouter } from 'react-router-dom';
import  DrawerMenu  from './drawer/drawer.component';
import {connect} from "react-redux"


const useStyle = makeStyles(theme=>( {
    appBar: {
        top: 'auto',
        bottom: 0,
    },
     
    text: {
        padding: theme.spacing(2),
    },
}))

const HeaderComponent = (props) => {
    const [isOpenMenuLeft, setisOpenMenuLeft] = React.useState(false);
    const [isOpenMenuBottom, setisOpenMenuBottom] = React.useState(false);


    const classes = useStyle();
    const toggleMenuLeft = () => {
        setisOpenMenuLeft(!isOpenMenuLeft);
    }
    const toggleMenuBottom = () => {
        setisOpenMenuBottom(!isOpenMenuBottom);
    }
    
    
        return (
            <>
            <Paper square>
            <Hidden implementation="css" mdUp >
                <Paper square elevation={1}>
                    <Typography className={classes.text} variant="h6" >
                    {   props.location.pathname == "/"
                        ?"home".toUpperCase()
                        : props.location.pathname.slice(1).toUpperCase()}
                    </Typography>
                </Paper>
                {
                    props.isLoad
                    ?<LinearProgress color="secondary" />
                    :null
                }            
            </Hidden>
            <Hidden implementation="css" smDown>
                <AppBar position="sticky">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleMenuLeft} >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6">
                            { props.location.pathname == "/"
                            ?"home".toUpperCase()
                            : props.location.pathname.slice(1).toUpperCase()}
                        </Typography>
                        
                        
                    </Toolbar>
                </AppBar>
                {
                    props.isLoad
                    ?<LinearProgress color="secondary" />
                    :null
                }
            </Hidden>

            <Hidden implementation="css" mdUp>
                <AppBar position="fixed" className={classes.appBar} >
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleMenuBottom} >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6">
                            { props.location.pathname == "/"
                            ?"home".toUpperCase()
                            : props.location.pathname.slice(1).toUpperCase()}
                        </Typography>
                        
                        
                    </Toolbar>
                </AppBar>    
                
            </Hidden>
            </Paper>
            
            <DrawerMenu isOpenMenuBottom={isOpenMenuBottom} isOpenMenuLeft={isOpenMenuLeft} toggleMenuBottom={toggleMenuBottom} toggleMenuLeft={toggleMenuLeft} />
                     
            </>
            
        )
    
}

const mapStateToProps = store => {
    return{
        ...store.main
    }
}

export default connect(mapStateToProps)(withRouter(HeaderComponent));