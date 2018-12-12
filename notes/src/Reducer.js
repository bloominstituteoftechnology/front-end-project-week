import {ADDING,FETCHING,UPDATING,DELETING,ERROR,GETTING} from "./Actions";

const initialState = {
    notes:[]
}

export const reducer = (state = initialState,action) => {
    switch(action.type){
        case FETCHING:
            return {...state}
        case GETTING:
            return {notes:action.payload}
        case ADDING:
            return {...state}
        case UPDATING:
            return {...state}
        case DELETING:
            const newNotes = state.notes.filter(e => {
                return (e.id !== action.payload )
        })
            return {notes:newNotes}
        case ERROR:
            alert("The server had an error")
            return {...state}
        default:
            return {...state}
    }
}