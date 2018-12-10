import {
    FETCHING_NOTES, FETCHED_NOTES, ERROR
} from '../actions'

const initialState = {
    fetchingNotes: false,
    fetchedNotes: false,
    error: null,
    notes: [],
}

export const notesReducer = (prevState = initialState, action) =>{
    switch(action.type){
        case FETCHING_NOTES: return{...prevState, fetchingNotes: true,}
        case FETCHED_NOTES: return{...prevState, fetchedNotes: true, notes: action.payload}
        case ERROR: return {...prevState, error: action.payload}
        default: return prevState;
    }
}