// Imports

// Action Type Imports
import {
    // Create Note
    CREATING_NOTE,
    // Read All
    FETCHING_NOTES,
    NOTES_FETCH_SUCCESS,
    NOTES_FETCH_FAIL,
    // Read One
    FETCHING_NOTE,
    NOTE_FETCH_SUCCESS,
    NOTE_FETCH_FAIL,
    // Update 
    UPDATING_NOTE,
    DELETING_NOTE
} from '../actions'

// Initial State
const initialState = {
    error: null,
    creatingNote: false,
    noteId: null,
    fetchingNotes: false,
    notes: [],
    fetchingNote: false,
    note: {},
    deletingNote: false
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
        
        // R - Read All
        case FETCHING_NOTES:
            return {
                ...state,
                fetchingNotes: true,
                creatingNote: false
            }
        
        case NOTES_FETCH_SUCCESS:
            return {
                ...state,
                fetchingNotes: false,
                notes: action.payload,
                creatingNote: false,
                deletingNote: false,
                error: null
            }
        
        case NOTES_FETCH_FAIL:
            return {
                ...state,
                creatingNote: false,
                deletingNote: false,
                error: action.payload
            }
        
        // R - Read One
        case FETCHING_NOTE:
            return {
                ...state,
                creatingNote: false,
                updatingNote: false,
                fetchingNote: true
            }
        
        case NOTE_FETCH_SUCCESS:
            return {
                ...state,
                fetchingNote: false,
                creatingNote: false,
                updatingNote: false,
                note: action.payload,
                error: null
            }
        
        case NOTE_FETCH_FAIL:
            return {
                ...state,
                creatingNote: false,
                error: action.payload
            }
        
        case UPDATING_NOTE:
            return {
                ...state,
                updatingNote: true,
                error: null
            }
        
        case DELETING_NOTE:
            return {
                ...state,
                deletingNote: true
            }
        
        default:
            return state
    }
}

export default reducer;