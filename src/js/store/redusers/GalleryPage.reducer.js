const initialState = {
    
}
export const galleryPageReducer = (state= initialState, action) =>{
    switch(action.type){
        case "GET_GALLERY":{
            let categoryList = [];
            action.payload.forEach(item=>{
                if(!categoryList.includes(item.framework)){
                    categoryList.push(item.framework);
                }
            })
            let newState = {};
            categoryList.forEach(category=>{
                newState[category] = action.payload.filter(item=>item.framework === category?true:false )
            })
            return newState
            
        }
        default:{
            return state
        }
    }
}