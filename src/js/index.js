import '../scss/main.scss';
import React from 'react';
import{render} from 'react-dom'
import 'fontsource-roboto';
import {Provider} from 'react-redux';
import {store} from './store/store'
import AppComponent from "./components/app.component"
import Favicon from 'react-favicon';
import {favicon_x32} from "./images";

 render(
    <Provider store={store}>
            <Favicon url={favicon_x32} />
            <AppComponent />
    </Provider>, 
    document.querySelector('.app'));