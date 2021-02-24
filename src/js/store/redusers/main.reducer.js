const initialState ={
    isLoad:true
}
export const mainReducer = (state = initialState, action) =>{
    switch(action.type){
        case "DATA_LOADING":{
            return {...state, isLoad:true}
        }
        case "DATA_LOADED":{
            return {...state, isLoad:false}
        }
        default:{
            return state
        }
    }
}