// Imports

// Action Type Imports
import {
    // Read All
    FETCHING_NOTES,
    NOTES_FETCH_SUCCESS,
    NOTES_FETCH_FAIL,
    // Read One
    FETCHING_NOTE,
    NOTE_FETCH_SUCCESS,
    NOTE_FETCH_FAIL
} from '../actions'

// Initial State
const initialState = {
    error: null,
    fetchingNotes: false,
    notes: [],
    fetchingNote: false,
    note: {}
}

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        // R - Read All
        case FETCHING_NOTES:
            return {
                ...state,
                fetchingNotes: true
            }
        
        case NOTES_FETCH_SUCCESS:
            return {
                ...state,
                fetchingNotes: false,
                notes: action.payload,
                error: null
            }
        
        case NOTES_FETCH_FAIL:
            return {
                ...state,
                error: action.payload
            }
        
        // R - Read One
        case FETCHING_NOTE:
            return {
                ...state,
                fetchingNote: true
            }
        
        case NOTE_FETCH_SUCCESS:
            return {
                ...state,
                fetchingNote: false,
                note: action.payload,
                error: null
            }
        
        case NOTE_FETCH_FAIL:
            return {
                ...state,
                error: action.payload
            }
        
        default:
            return state
    }
}

export default reducer;