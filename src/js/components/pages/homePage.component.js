import { Box, Button, ButtonGroup, LinearProgress, Container, Divider, Grid, IconButton, Link, List, ListItem, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import MyPhoto from "../../images";
import { makeStyles} from "@material-ui/core/styles" 
import {connect} from 'react-redux';
import Iframe from 'react-iframe';
import PhoneIcon from '@material-ui/icons/Phone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fab} from "@fortawesome/free-brands-svg-icons"
import {library} from '@fortawesome/fontawesome-svg-core';

library.add(fab)

const useStyles = makeStyles(theme =>({
    avatar:{
        maxWidth:"100%",
        maxHeight:theme.breakpoints.values.sm,
    },
    avatarBox:{
        display:"flex",
        justifyContent:"center"
    },
    text:{
        paddingTop:theme.spacing(2),
        paddingBottom:theme.spacing(2),
    },
    tHead:{
        backgroundColor:theme.palette.primary.dark,
    },
    tHeadText:{
        color:theme.palette.primary.contrastText,
    },
    map:{
        width:"100%",

        minHeight:200,
        ...theme.shape
    },
    btnGroup:{
        [theme.breakpoints.down("xs")]:{            
            display:"flex",
            width:"100%"
        }
    },
    grow:{
        [theme.breakpoints.down('xs')]:{
            flexGrow:1
        }
    },
    fullWidthBtn:{
        [theme.breakpoints.down('xs')]:{
            width:"100%"
        }
    },
    important:{
        backgroundColor:theme.palette.error.main,
        color:theme.palette.error.contrastText,
        ...theme.shape,
        padding:theme.spacing(1),
        marginBottom:theme.spacing(2),
        display:"inline-block"

    }
}))

 const HomePageComponent = props =>{
    const [IsLoad, setIsLoad] = React.useState(true)

    const classes = useStyles();
    useEffect(()=>{
        new Promise((resolve,reject)=>{
            props.dispatch({
                type:"DATA_LOADING"
            })
        })
       .then(
            fetch("http://localhost:3000/myInfo")
            .then(responce => responce.json())
            .then(data=> {
                return props.dispatch({
                    type:"INIT",
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

const renderTable = () => {
    return (<TableContainer component={Paper} square elevation={2}>
            <Table>
                <TableHead className={classes.tHead}>
                    <TableRow>
                        <TableCell align="left" colSpan="2">
                            <Typography variant="h6" className={classes.tHeadText}>
                                Short Info
                            </Typography>                            
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <Typography variant="subtitle1" color="textSecondary">
                                Name:
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>
                                {props.personalInfo.name}
                            </Typography>                            
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Typography variant="subtitle1" color="textSecondary">
                                Surname:
                            </Typography>                            
                        </TableCell>
                        <TableCell>
                            <Typography>
                                {props.personalInfo.surname}
                            </Typography>
                            
                        </TableCell>
                    </TableRow>     
                    <TableRow>
                        <TableCell>
                            <Typography variant="subtitle1" color="textSecondary">
                                Age:
                            </Typography>
                            
                        </TableCell>
                        <TableCell>
                            <Typography>
                               {props.personalInfo.age} 
                            </Typography>
                            
                        </TableCell>
                    </TableRow>   
                    <TableRow>
                        <TableCell>
                            <Typography variant="subtitle1" color="textSecondary">
                                Sex:
                            </Typography>
                            
                        </TableCell>
                        <TableCell>
                            <Typography>
                                {props.personalInfo.gender}
                            </Typography>
                            
                        </TableCell>
                    </TableRow>  
                    <TableRow>
                        <TableCell>
                            <Typography variant="subtitle1" color="textSecondary">
                                Education:
                            </Typography>                            
                        </TableCell>
                        <TableCell>
                            <List>
                                {props.personalInfo.education.map((item, index) =>(
                                <ListItem key={index} disableGutters divider>
                                    <ListItemText>
                                        <Typography variant="body1">
                                            {item.place}
                                        </Typography>
                                        <Typography variant="body1">
                                            {item.period}
                                        </Typography>
                                    </ListItemText>                                    
                                </ListItem>
                            ))}
                            </List>
                            
                        </TableCell>
                    </TableRow> 
                    <TableRow>
                        <TableCell>
                            <Typography variant="subtitle1" color="textSecondary">
                                Skills:
                            </Typography>                            
                        </TableCell>
                        <TableCell>
                            <Typography  variant="body1" >
                               {props.personalInfo.skills.join(', ')} 
                            
                            </Typography>
                        </TableCell>
                    </TableRow>                         
                </TableBody>
            </Table>
         </TableContainer>
         
    )
}

const createSocialLinks = () =>{
    return (
            <Box marginBottom={2}>
                <ButtonGroup color="secondary" size="medium" variant="contained" className={classes.btnGroup} >
                    {
                        props.personalInfo.socials.map((item,index)=>{
                            const {link, icon} = item;
                            return (
                                <Button key={index} href={link} className={classes.grow} >
                                    <FontAwesomeIcon icon={["fab",icon]} size="lg"/>
                                </Button>
                            )
                        })
                     }
                </ButtonGroup>
                
            </Box>
    )
}
const createAboutMe = () =>{
    return(<Box >
                {
                    props.personalInfo.aboutMe.map((item,index) =>{
                        const {text, flag} = item;
                        return(
                            
                                flag == "strong"
                                ?<Typography className={classes.important} component={flag} key={index} >{text.toUpperCase()}</Typography>
                                :<Typography paragraph key={index}>{text}</Typography>
                            
                        )
                    })
                }
                <Typography>
                    My skills:
                </Typography>
                {
                    props.personalInfo.skills.map((item, index)=>{
                        return (
                            <Typography key={index}>
                                {`- ${item}`}
                            </Typography>
                        )
                    })
                }    
            </Box>
            
    )
}
const renderContacts = () =>{
    return (
        <>
            <Box  marginBottom={2}>
                <Typography variant="h6" gutterBottom>
                    Email:
                </Typography>
                <Button 
                    href={`mailto:${props.personalInfo.Email}`}
                    startIcon={<AlternateEmailIcon />}
                    color="secondary"
                    variant="contained"
                    size="small"
                    className={classes.fullWidthBtn}
                >
                    {props.personalInfo.Email}
                </Button>
            </Box>
            <Box  marginBottom={2}>
                <Typography variant="h6" gutterBottom>
                    Phone number:
                </Typography>
                <Button
                    href={`tel:${props.personalInfo.phoneNumber}`}
                    startIcon={<PhoneIcon />}
                    color="secondary"
                    variant="contained"
                    size="small"
                    className={classes.fullWidthBtn}
                >
                    {props.personalInfo.phoneNumber}
                </Button>
            </Box>
            <Box >
                <Typography variant="h6" gutterBottom>
                    Socials:
                </Typography>
                {createSocialLinks()}
            </Box>
            <Box >
                <Typography variant="h6" gutterBottom>
                    Location:
                </Typography>
                <Iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1174.3536667223639!2d27.580030783709592!3d53.936943180285645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf6e354036cb%3A0x43d37ca7115c1332!2sBogdanovicha%20Maksima%20155%2C%20Minsk!5e0!3m2!1sen!2sby!4v1613641427105!5m2!1sen!2sby" 
                        className={classes.map}
                        frameBorder="0" 
                        allowFullScreen="" 
                        aria-hidden="false" 
                        tabIndex="0"
                    />
            </Box>
        </>
    )
}
    return(!IsLoad
            ?<>
            <Grid container spacing={1} >
                <Grid item sm={12} md={5} lg={4} spacing={1} container  direction="column" >
                    <Grid item >
                        <Paper square elevation={2}>
                            <Box className={classes.avatarBox}>
                                <img src={MyPhoto} className={classes.avatar} alt=""/>
                            </Box>
                        </Paper>
                        <Divider/>
                    </Grid>
                    <Grid item>
                        {renderTable()}
                    </Grid>
                </Grid>
                <Grid item sm={12} md={7} lg={8} container spacing={1}  direction="column">
                    <Grid item >
                         <Paper elevation={2} square>
                            <Box p={4}>
                                <Container disableGutters>
                                    <Typography variant="h4" gutterBottom>
                                        About Me
                                    </Typography>
                                    
                                </Container>
                                <Container disableGutters>
                                    {createAboutMe()}
                                </Container>
                            
                            </Box>
                    </Paper>
                    </Grid>
                   <Grid item>
                       <Paper elevation={2} square >
                           <Box p={4}>
                                <Container disableGutters>
                                    <Typography variant="h4" gutterBottom >
                                        Contacts
                                    </Typography>
                                </Container>
                                <Container disableGutters>
                                        {renderContacts()}
                                </Container>
                           </Box>
                       </Paper>
                   </Grid>                    
                </Grid>
            </Grid>
            </>
            :null          
        )
    
}

const mapStateToProps = store =>({
    ...store.main,
    ...store.home,
    
})
    
        
    


export default connect(mapStateToProps)(HomePageComponent)