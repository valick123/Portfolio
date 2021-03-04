import {  Typography, Grid, Box} from "@material-ui/core";
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from "react-redux"
import { GalleryCard } from "./galleryCard";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
      },
    
}))



const GalleryPageComponent = props =>{
    const classes = useStyles();
    const [IsLoad, setIsLoad] = React.useState(true)

    
  useEffect(()=>{
    new Promise((resolve,reject)=>{
        props.dispatch({
            type:"DATA_LOADING"
        })
        resolve()
    })
        .then(()=>{
            return fetch(`${props.dbAdress}/gallery`)
        }
        
        
        )
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
    
},[])
    return (
        !IsLoad
        ?<>            
            <Box p={1}>
                <Typography variant="h5" gutterBottom>
                    React
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} md={4} xl={3}>
                        <GalleryCard thumbnail={`https://picsum.photos/200/300/?blur&random=1`} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} xl={3}>
                        <GalleryCard thumbnail={`https://picsum.photos/200/300/?blur&random=1`} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} xl={3}>
                        <GalleryCard thumbnail={`https://picsum.photos/200/300/?blur&random=1`} />
                    </Grid>
                </Grid>
            </Box>
            <Box p={1}>
                <Typography variant="h5" gutterBottom>
                    Angular
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} md={4} xl={3}>
                        <GalleryCard thumbnail={`https://picsum.photos/200/300/?blur&random=1`} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} xl={3}>
                        <GalleryCard thumbnail={`https://picsum.photos/200/300/?blur&random=1`} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} xl={3}>
                        <GalleryCard thumbnail={`https://picsum.photos/200/300/?blur&random=1`} />
                    </Grid>
                </Grid>
            </Box>
            <Box p={1}>
                <Typography variant="h5" gutterBottom>
                    Vue
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} md={4} xl={3}>
                        <GalleryCard thumbnail={`https://picsum.photos/200/300/?blur&random=1`} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} xl={3}>
                        <GalleryCard thumbnail={`https://picsum.photos/200/300/?blur&random=1`} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} xl={3}>
                        <GalleryCard thumbnail={`https://picsum.photos/200/300/?blur&random=1`} />
                    </Grid>
                </Grid>
            </Box>
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