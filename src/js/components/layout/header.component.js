import { AppBar, Drawer, IconButton, List,ListItemIcon,ListItemText, ListItem, Toolbar, Typography,  Divider, Box, Hidden } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import ContactsIcon from '@material-ui/icons/Contacts';
import AppsIcon from '@material-ui/icons/Apps';
import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { withRouter } from 'react-router-dom';

const useStyle = makeStyles(theme=>( {
    menuList:{
        minWidth:"250px",
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    // offset:{
    //     position:"relative",
    //     bottom:"0px",
    //     minHeight:theme.spacing(8),
    //     width:"100%",
    //     backgroundColor:"red",
    // }
}))

const HeaderComponent = (props) => {
    const [isOpenMenuLeft, setisOpenMenuLeft] = React.useState(false);
    const [isOpenMenuBottom, setisOpenMenuBottom] = React.useState(false);

    const [MenuItems, setMenuItems] = React.useState([
        {
            text:"Home",
            path:"/",
            icon: <HomeIcon/>
        },
        {
            text:"Gallery",
            path:"/gallery",
            icon: <AppsIcon/>
        },
        {
            text:"Contact Us",
            path:"/contacts",
            icon: <ContactsIcon/>
        }
    ])
    const classes = useStyle();
    const toggleMenuLeft = () => {
        setisOpenMenuLeft(!isOpenMenuLeft);
    }
    const toggleMenuBottom = () => {
        setisOpenMenuBottom(!isOpenMenuBottom);
    }
    const renderMenu = ()=>{
        return MenuItems.map((item, index)=>{                
                return(
                    <ListItem button key={index} onClick={()=> props.history.push(item.path)} >
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                )
            })
        
    }
    
        return (
            <>
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
            </Hidden>

            <Hidden implementation="css" mdUp>
            {/* <div className={classes.offset}/> */}

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
            

            <Hidden implementation="css" smDown>
                <Drawer open={isOpenMenuLeft} onClose={toggleMenuLeft}>                        
                    <Box className={classes.drawerHeader}>
                                <IconButton onClick={toggleMenuLeft}>
                                <ArrowBackIcon/>
                            </IconButton>
                            </Box>                        
                            <Divider/>
                            <List className={classes.menuList} onClick={toggleMenuLeft} >
                                {renderMenu()}
                            </List>         
                </Drawer> 
            </Hidden>   
            <Hidden  implementation="css" mdUp>
                  <Drawer anchor="bottom" open={isOpenMenuBottom} onClose={toggleMenuBottom}>                        
                            <Box className={classes.drawerHeader}>
                                <IconButton onClick={toggleMenuBottom}>
                                <ArrowDownwardIcon/>
                            </IconButton>
                            </Box>                        
                            <Divider/>
                            <List  onClick={toggleMenuBottom} >
                                {renderMenu()}
                            </List> 
                        </Drawer>
            </Hidden>
            
                      
            </>
            
        )
    
}
export default withRouter(HeaderComponent);