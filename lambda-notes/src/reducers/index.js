import { FETCHING_NOTES, FETCHED_NOTES, ADDING_NOTES, ADDED_NOTES, ERROR } from "../actions";

const initialState = {
    notes: [],
    fetchingNotes: true,
    addingNotes: false,
    addedNotes: true,
    err: null
}

export const notesReducer = ( state = initialState, action) => {
    switch(action.type){
        case FETCHING_NOTES:
            return {
                ...state,
                fetchingNotes: true
            }
        case FETCHED_NOTES:
            return {
                ...state,
                fetchingNotes: false,
                notes: action.payload
            }
        case ADDING_NOTES: 
            return {
                ...state,
                addingNotes: true
            }
        case ADDED_NOTES:
            return {
                ...state,
                addingNotes: false,
                addedNotes: true,
                notes: state.notes.push(action.payload)
            }
        case ERROR: 
            return {
                ...state,
                err: action.err
            }
        default:
            return state
    }
}
