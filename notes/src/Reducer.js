import {ADDING,FETCHING,UPDATING,DELETING,ERROR,GETTING} from "./Actions";
const TESTING = "TESTING"

const initialState = {
    notes:[],
    waiting:false
}

export const reducer = (state = initialState,action) => {
    switch(action.type){
        case TESTING:
            return {...state,waiting:!state.waiting}
        case FETCHING:
            return {...state,waiting:true}
        case GETTING:
            return {...state,notes:action.payload,waiting:false}
        case ADDING:
            return {...state,waiting:false}
        case UPDATING:
            return {...state,waiting:false}
        case DELETING:
            return {...state,waiting:false}
        case ERROR:
            alert("The server had an error")
            return {...state,waiting:false}
        default:
            return {...state}
    }
}