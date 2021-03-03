import { AppBar, IconButton, Toolbar, Typography, Hidden, Paper, LinearProgress } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from "@material-ui/core";
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import  DrawerMenu  from './drawer/drawer.component';
import {connect} from "react-redux";
import Brightness6Icon from '@material-ui/icons/Brightness6';
import { Scroll } from './topScroller/Scroller';


const useStyle = makeStyles(theme=>( {
    appBar: {
        top: 'auto',
        bottom: 0,
    },
     
    text: {
        padding: theme.spacing(2),
    },
    title:{
        flexGrow:1
    }
}))



const HeaderComponent = (props) => {
    const [isOpenMenuLeft, setisOpenMenuLeft] = React.useState(false);
    const [isOpenMenuBottom, setisOpenMenuBottom] = React.useState(false);
    useEffect(()=>{
        document.title = props.location.pathname == '/'? `Portfolio Home` : `Portfolio ${props.location.pathname[1].toUpperCase()}${props.location.pathname.slice(2)}`;
    })
    const classes = useStyle();
    const toggleMenuLeft = () => {
        setisOpenMenuLeft(!isOpenMenuLeft);
    }
    const toggleMenuBottom = () => {
        setisOpenMenuBottom(!isOpenMenuBottom);
    }
    const switchTheme = () =>{
        props.dispatch({type:"CHANGE_THEME_MODE"})
    }
    
        return (
            <>
                <Paper square>            
    {/*desctop*/}  <Hidden implementation="css" smDown>                     
                        <AppBar position="sticky">
                            <Toolbar id="back-to-top-anchor" >
                                <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleMenuLeft} >
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" className={classes.title}>
                                    { props.location.pathname == "/"
                                    ?"home".toUpperCase()
                                    : props.location.pathname.slice(1).toUpperCase()}
                                </Typography>
                                <IconButton onClick={switchTheme} >
                                    <Brightness6Icon/>
                                </IconButton>                               
                            </Toolbar>
                        </AppBar>
                        {
                            props.isLoad
                            ?<LinearProgress color="secondary" />
                            :null
                        }
                        {/* <BackToTop/> */}
                        <Scroll target={'#back-to-top-anchor'} />
                    </Hidden>
    {/*mobile*/}    <Hidden implementation="css" mdUp >  
                        <Paper square elevation={1} >
                            <Typography className={classes.text} variant="h6" id="to-the-top-mobile" >
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
                        {/* <BackToTop/>             */}
                        <AppBar position="fixed" className={classes.appBar}  >
                            <Toolbar >
                                <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleMenuBottom} >
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" className={classes.title}>
                                    { props.location.pathname == "/"
                                    ?"home".toUpperCase()
                                    : props.location.pathname.slice(1).toUpperCase()}
                                </Typography>
                                <IconButton onClick={switchTheme} >
                                    <Brightness6Icon/>
                                </IconButton>
                            </Toolbar>
                        </AppBar>    
                        <Scroll target={"#to-the-top-mobile"} />
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