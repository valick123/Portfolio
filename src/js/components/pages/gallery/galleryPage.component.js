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

const renderGallery = () =>{
    return Object.keys(props.gallery).map((rowName,indexRow)=>{
        return (props.gallery[rowName].length
        ?<Box p={1} key={indexRow}>
            <Typography variant="h5" gutterBottom>
                {`${rowName[0].toUpperCase()}${rowName.slice(1)}`}
            </Typography>
            <Grid container spacing={1}>
                    {
                        props.gallery[rowName].map(item=>{
                            return (
                                <Grid item xs={12} sm={6} md={4} xl={3} key={item.id}>
                                    {
                                        <GalleryCard info={item} />
                                    }
                                </Grid>
                            )
                        })
                    }
            </Grid>
        </Box>
        :null)
    })
}
    return (
        !IsLoad
        ?renderGallery()       
        :null
        
        )
    
}

const mapStateToProps = store =>{
  return {
    ...store.main,
    gallery:store.gallery
  }
}

export default connect(mapStateToProps)(GalleryPageComponent)