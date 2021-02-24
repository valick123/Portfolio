import {combineReducers} from 'redux';
import { galleryPageReducer } from './GalleryPage.reducer';
import {homePageReducer} from "./HomePage.reducer"
import { mainReducer } from './main.reducer';

export const rootReducer = combineReducers({
    home:homePageReducer,
    main: mainReducer,
    gallery:galleryPageReducer
})