import {FETCHING, ERROR, ADD_NOTE} from '../actions'

//import actions I need
//might need to add an ID to the store

const initialState = {
    fetching: false,
    //is this to high up?
    notes:[
        {
            title: 'Creative Title',
            body: 'something Interesting',
        }
    ],
    error: null,
}

export const notesReducer = (notes = initialState, action) => {
    switch(action.type) {
        case FETCHING:
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