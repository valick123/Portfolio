import { Grid } from '@material-ui/core';
import React from 'react';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom'
import { FooterComponent } from './layout/footer.component';
import  HeaderComponent  from './layout/header.component';
import { ContactPageComponent } from './pages/contactPage.component';
import { GalleryPageComponent } from './pages/galleryPage.component';
import { HomePageComponent } from './pages/homePage.component';
import { NoMatchPageComponent } from './pages/noMatch.component';

export class AppComponent extends React.Component{
    constructor(props){
        super(props);
        
    }
    
    render(){
        return(            
                <Router>
                    <Grid container direction="column" >
                        <Grid item xs={12}>
                            <HeaderComponent/>
                        </Grid>
                        <Grid item container xs={12}>
                            <Grid item xs={false} sm={2} />
                            <Grid item xs={12} sm={9} >
                               <Switch>
                                <Route exact path="/" component = {HomePageComponent} />
                                <Route path="/gallery" component = {GalleryPageComponent} />
                                <Route path = "/contacts" component = {ContactPageComponent } />                                 
                                <Route path="*" component = {NoMatchPageComponent} />    
                            </Switch> 
                            </Grid>
                            <Grid item xs={false} sm={2} />
                        </Grid>
                        <Grid item xs={12}>
                            <FooterComponent/>
                        </Grid>
                    </Grid>
                </Router>
        )
    }
}