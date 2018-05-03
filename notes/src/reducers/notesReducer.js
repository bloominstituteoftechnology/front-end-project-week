import {FETCHING, ERROR, ADD_NOTE} from '../actions'

//import actions I need
//might need to add an ID to the store

const initialState = {
    fetching: false,
    //is this to high up?
    notes:
        {
            title: 'Creative Title',
            body: 'Something Interesting',
        }
    ,
    error: null,
}
//do not need to use
export const notesReducer = (notes = initialState, action) => {
    switch(action.type) {

        //do these need to be more literal
        case FETCHING:
            // do these need to require
            return {fetching: true}
        case ADD_NOTE:
            return {...notes, title: action.title, body: action.body}
        case ERROR:
            return {...notes, error:action.error}
            // will this be useful without axios?
        default:
            return notes
    }
}