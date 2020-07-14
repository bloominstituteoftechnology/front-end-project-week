import {
    FETCHING_NOTES, FETCHED_NOTES, ERROR,ADDED_NOTE,ADDING_NOTE, GET_NOTE,
     GOT_NOTE,UPDATED_NOTE,UPDATING_NOTE, DELETED_NOTE,DELETING_NOTE
} from '../actions'

const initialState = {
    fetchingNotes: false,
    fetchedNotes: false,
    updatingNote: false,
    updatedNote: false,
    deletingNote: false,
    deletedNote: false,
    addingNote: false,
    addedNote: false,
    getNote: false,
    gotNote: false,
    error: null,
    notes: [],
    targetNote:[],
    newNote: [],
}

export const notesReducer = (prevState = initialState, action) =>{
    switch(action.type){
        case FETCHING_NOTES: return{...prevState, fetchingNotes: true,}
        case FETCHED_NOTES: return{...prevState, fetchedNotes: true, notes: action.payload}
        case ADDING_NOTE: return {...prevState, addingNote: true,}
        case ADDED_NOTE: return{...prevState, addedNote: true,}
        case GET_NOTE: return {...prevState, getNote: true,}
        case GOT_NOTE: return {...prevState, gotNote: true, targetNote: action.payload}
        case UPDATING_NOTE: return {...prevState, updatingNote: true}
        case UPDATED_NOTE: return {...prevState, updatedNote: true, newNote: action.payload}
        case DELETING_NOTE: return {...prevState, deletingNote: true,}
        case DELETED_NOTE: return {...prevState, deletedNote: true, }
        case ERROR: return {...prevState, error: action.payload}
        default: return prevState;
    }
}