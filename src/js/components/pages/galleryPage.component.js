import { AppBar, Tab, Tabs, Box, Typography, Hidden} from "@material-ui/core";
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from "react-redux"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        // height: 224,
      },
    
    tab:{
        flexGrow:1,
        maxWidth:"none",
        color:theme.palette.text.primary

    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
      },
    tabPanel:{
        // width:"100%"
        color:theme.palette.text.primary
    }
}))

const TabPanel = (props) => {

    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        {...other}
      >
        {value === index && (
          <Box >
            {/* <Typography> */}
                {children}
            {/* </Typography> */}
          </Box>
        )}
      </div>
    );
  }



const GalleryPageComponent = props =>{
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    const [IsLoad, setIsLoad] = React.useState(true)

    const handleChange = (event, newValue) => {
        setValue(newValue);
  };
  useEffect(()=>{
    new Promise((resolve,reject)=>{
        props.dispatch({
            type:"DATA_LOADING"
        })
    })
        .then(
        fetch("http://localhost:3000/gallery")
        .then(responce => responce.json())
        .then(data=> {
            return props.dispatch({
                type:"GET_GALLERY",
                payload:data
                })
            }
        )
        .then(()=>{
            setIsLoad(false)
            props.dispatch({
                type:"DATA_LOADED"
            })
        })
    )
    
},[])
    return (
        !props.isLoad
        ?<>
            <Hidden implementation = "css" xsDown >
                <div className={classes.root} >
                <Tabs 
                    value={value} 
                    onChange={handleChange} 
                    aria-label="simple tabs example"
                    orientation="vertical"
                    className={classes.tabs}
            >
                    <Tab className={classes.tab} label="React"  />
                    <Tab className={classes.tab} label="Angular" />
                    <Tab className={classes.tab} label="Vue"  />
                    <Tab className={classes.tab} label="Vanilla JS"  />
                 </Tabs>
                    <TabPanel value={value} index={0} className={classes.tabPanel}>
                        React
                    </TabPanel>
                    <TabPanel value={value} index={1} className={classes.tabPanel}>
                        Angular
                    </TabPanel>
                    <TabPanel value={value} index={2} className={classes.tabPanel}>
                        Vue
                    </TabPanel>
                    <TabPanel value={value} index={3} className={classes.tabPanel}>
                        Vanilla JS
                    </TabPanel>
                </div>
                
            </Hidden>
        
        </>
        :null
        
        )
    
}

const mapStateToProps = store =>{
  return {
    ...store.main,
    ...store.gallery
  }
}

export default connect(mapStateToProps)(GalleryPageComponent)