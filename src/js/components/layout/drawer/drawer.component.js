import React from "react";
import { makeStyles} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import {  Drawer, IconButton, List,ListItemIcon,ListItemText, ListItem,  Divider, Box, Hidden } from '@material-ui/core';
import { withRouter } from "react-router-dom"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Iframe from "react-iframe";

const useStyle = makeStyles(theme=>( {
    menuList:{
        minWidth:"250px",
        [theme.breakpoints.down("sm")]:{
            width:"100vw"
        }
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    map:{
        padding:theme.spacing(1),
        minHeight:200,
        width:"100%",
        border:"none",
        ...theme.shape,
    },
    drawer:{
        maxHeight:"100vh",
    }
}))

const DrawerMenu = props =>{

    const [MenuItems, setMenuItems] = React.useState([
        {
            text:"Home",
            path:"/",
            icon: <HomeIcon/>
        },
        {
            text:"Gallery",
            path:"/gallery",
            icon: <ViewModuleIcon/>
        },
    ])

    const classes = useStyle();


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

    return(
        <>
            <Hidden implementation="css" smDown>
                <Drawer className={classes.drawer} open={props.isOpenMenuLeft} onClose={props.toggleMenuLeft}>                        
                    <Box className={classes.drawerHeader}>
                                <IconButton onClick={props.toggleMenuLeft}>
                                <ArrowBackIcon/>
                            </IconButton>
                            </Box>                        
                            <Divider/>
                            <List className={classes.menuList} onClick={props.toggleMenuLeft} >
                                {renderMenu()}
                            </List>         
                </Drawer> 
            </Hidden>   
            <Hidden  implementation="css" mdUp>
                  <Drawer className={classes.drawer} anchor="bottom" open={props.isOpenMenuBottom} onClose={props.toggleMenuBottom}>                        
                            <Box className={classes.drawerHeader}>
                                <IconButton onClick={props.toggleMenuBottom}>
                                <ArrowDownwardIcon/>
                            </IconButton>
                            </Box>                        
                            <Divider/>
                            <List  onClick={props.toggleMenuBottom} >
                                {renderMenu()}
                            </List> 
                            <Divider/>
                            <Box >
                                <Iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1174.3536667223639!2d27.580030783709592!3d53.936943180285645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf6e354036cb%3A0x43d37ca7115c1332!2sBogdanovicha%20Maksima%20155%2C%20Minsk!5e0!3m2!1sen!2sby!4v1613641427105!5m2!1sen!2sby" 
                                    className={classes.map}
                                    frameBorder="0" 
                                    allowFullScreen="" 
                                    aria-hidden="false" 
                                    tabIndex="0"
                                />
                            </Box>
                    </Drawer>
            </Hidden>
        </>
    )
}
export default withRouter(DrawerMenu);
