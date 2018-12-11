import {
    FETCHING_NOTES, FETCHED_NOTES, ERROR,ADDED_NOTE,ADDING_NOTE
} from '../actions'

const initialState = {
    fetchingNotes: false,
    fetchedNotes: false,
    addingNote: false,
    addedNote: true,
    error: null,
    notes: [],
}

export const notesReducer = (prevState = initialState, action) =>{
    switch(action.type){
        case FETCHING_NOTES: return{...prevState, fetchingNotes: true,}
        case FETCHED_NOTES: return{...prevState, fetchedNotes: true, notes: action.payload}
        case ADDING_NOTE: return {...prevState, addingNote: true,}
        case ADDED_NOTE: return{...prevState, addedNote: true,}
        case ERROR: return {...prevState, error: action.payload}
        default: return prevState;
    }
}