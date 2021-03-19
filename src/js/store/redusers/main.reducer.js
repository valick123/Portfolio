const initialState ={
    isLoad:true,
    themeMode:true,
    dbAdress:"http://192.168.82.43:3000",
}
export const mainReducer = (state = initialState, action) =>{
    switch(action.type){
        case "DATA_LOADING":{
            return {...state, isLoad:true}
        }
        case "DATA_LOADED":{
            return {...state, isLoad:false}
        }
        case "CHANGE_THEME_MODE":{
            return {...state, themeMode:!state.themeMode}
        }
        default:{
            return state
        }
    }
}