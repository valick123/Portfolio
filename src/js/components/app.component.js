import React from 'react';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom'
import { FooterComponent } from './layout/footer.component';
import { HeaderComponent } from './layout/header.component';
import { HomePageComponent } from './pages/homePage.component';
import { NoMatchPageComponent } from './pages/noMatch.component';

export class AppComponent extends React.Component{
    render(){
        return(
            <React.Fragment>
                
                
                <Router>
                    <HeaderComponent/>
                        <Switch>
                            <Route exact path="/">
                                <HomePageComponent/>
                            </Route>
                            <Route path="*">
                                <NoMatchPageComponent/>
                            </Route>
                        </Switch>
                    <FooterComponent/>
                </Router>
                
            </React.Fragment>
           
        )
    }
}