// Imports

// Action Type Imports
import {
    // Create Note
    CREATING_NOTE,
    NEW_NOTE_SUCCESS,
    NEW_NOTE_FAIL,
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
    creatingNote: false,
    noteId: null,
    fetchingNotes: false,
    notes: [],
    fetchingNote: false,
    note: {}
}

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        // C - Create
        case CREATING_NOTE:
            return {
                ...state,
                creatingNote: true
            }

        case NEW_NOTE_SUCCESS:
            return {
                ...state,
                creatingNote: false,
                noteId: action.payload
            }
        
        case NEW_NOTE_FAIL:
            return {
                ...state,
                creatingNote: false,
                error: action.payload
            }
        
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