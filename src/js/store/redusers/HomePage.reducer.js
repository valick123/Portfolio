const initialState = {
    personalInfo:null
}
export const homePageReducer = (state = initialState, action) => {
    switch(action.type){
        case "INIT":{
            return {...state, personalInfo:action.payload}
        }
        default:{
            return state
        }
    }
}