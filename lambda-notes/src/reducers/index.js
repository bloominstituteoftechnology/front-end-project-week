import { FETCHED_NOTES, FETCHING_NOTES, ERROR_FETCHING_NOTES, 
        ADDED_NOTE, ADDING_NOTE, ERROR_ADDING_NOTE, 
        UPDATED_NOTE, UPDATING_NOTE, ERROR_UPDATING_NOTE, 
        DELETED_NOTE, DELETING_NOTE, ERROR_DELETING_NOTE } from '../actions';

const initialState = {
    notes: [],
    fetchingNotes: false,
    addingNote: false,
    updatingNote: false,
    deletingNote: false
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHED_NOTES:
            return {
                ...state,
                notes: action.payload,
                fetchingNotes: false
            }
        case FETCHING_NOTES:
            return {
                ...state,
                fetchingNotes: true
            }
        case ERROR_FETCHING_NOTES:
            return {
                ...state,
                fetchingNotes: false,
                addingNote: false,
                updatingNote: false,
                deletingNote: false
            }

        case ADDED_NOTE:
            return {
                ...state,
                notes: action.payload,
                addingNotes: false
            }
        case ADDING_NOTE:
            return {
                ...state,
                addingNotes: true
            }
        case ERROR_ADDING_NOTE:
            return {
                ...state,
                fetchingNotes: false,
                addingNote: false,
                updatingNote: false,
                deletingNote: false
            }

        case UPDATED_NOTE:
            return {
                ...state,
                notes: action.payload,
                updatingNotes: false
            }
        case UPDATING_NOTE:
            return {
                ...state,
                updatingNotes: true
            }
        case ERROR_UPDATING_NOTE:
            return {
                ...state,
                fetchingNotes: false,
                addingNote: false,
                updatingNote: false,
                deletingNote: false
            }

        case DELETED_NOTE:
            return {
                ...state,
                notes: action.payload,
                deletingNotes: false
            }
        case DELETING_NOTE:
            return {
                ...state,
                deletingNotes: true
            }
        case ERROR_DELETING_NOTE:
            return {
                ...state,
                fetchingNotes: false,
                addingNote: false,
                updatingNote: false,
                deletingNote: false
            }
        
        default:
            return state;
    }
}