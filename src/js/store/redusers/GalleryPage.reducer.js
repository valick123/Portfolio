const initialState = {
    gallery:null
}
export const galleryPageReducer = (state= initialState, action) =>{
    switch(action.type){
        case "GET_GALLERY":{
            return{...state, gallery:action.payload}
        }
        default:{
            return state
        }
    }
}