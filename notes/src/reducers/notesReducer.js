import {ERROR, ADD_NOTE, EDIT_NOTE, DELETE_NOTE, FETCHING, SUCCESS} from '../actions'

//import actions I need
//might need to add an ID to the store

const initialState = {
    notes:[],
    fetching:false,   
    
}
//do not need to use
export const notesReducer = (notes = [], action) => {
    switch(action.type) {
        //do these need to be more literal
        case FETCHING:
            return {...notes, fetching:true, friends:[]};
            // do these need to require
        case SUCCESS:
            return {...notes, notes:action.notes, fetching:false} 
        case ADD_NOTE:
            return {...notes, title: action.title, body: action.body}
        

        let id = action.payload.id;
            return notes.map((note) => {
                if (note.id === id) {
                    note.title = action.note.title;
                    note.body = action.note.body; 
                }
            })

        case DELETE_NOTE:
            return notes.filter(note => note.id !== action.payload.id);

        case ERROR:
            return {...notes, error:action.error}
            // will this be useful without axios?
        default:
            return notes
    }
}