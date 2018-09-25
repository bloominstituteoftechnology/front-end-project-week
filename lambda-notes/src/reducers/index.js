import { FETCHED_NOTES, FETCHING_NOTES, ERROR_FETCHING_NOTES, 
        ADDED_NOTE, ADDING_NOTE, ERROR_ADDING_NOTE, 
        PICK_NOTE_TO_UPDATE, UPDATED_NOTE, UPDATING_NOTE, ERROR_UPDATING_NOTE, 
        DELETED_NOTE, DELETING_NOTE, ERROR_DELETING_NOTE } from '../actions';

const initialState = {
    notes: [
        {
            title: "",
            content: ""
        }
    ],
    fetchedNotes: false,
    fetchingNotes: false,
    addingNote: false,
    updatingNote: false,
    deletingNote: false,
    noteToUpdate: null,
    error: ''
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_NOTES:
            return {
                ...state,
                fetchingNotes: true,
                fetchedNotes: false
            }
        case FETCHED_NOTES:
            return {
                ...state,
                notes: action.payload,
                fetchingNotes: false,
                fetchedNotes: true
            }
        case ERROR_FETCHING_NOTES:
            return {
                ...state,
                fetchingNotes: false,
                addingNote: false,
                updatingNote: false,
                deletingNote: false
            }

        case ADDING_NOTE:
            return {
                ...state,
                addingNotes: true
            }
        case ADDED_NOTE:
            return {
                ...state,
                notes: action.payload,
                addingNotes: false
            }
        case ERROR_ADDING_NOTE:
            return {
                ...state,
                fetchingNotes: false,
                addingNote: false,
                updatingNote: false,
                deletingNote: false
            }

        case PICK_NOTE_TO_UPDATE:
            const note = state.notes.find(note => note.id === action.payload);
            return { 
                ...state, 
                noteToUpdate: note ? note : null 
            }
        case UPDATING_NOTE:
            return {
                ...state,
                updatingNotes: true
            }
        case UPDATED_NOTE:
            return {
                ...state,
                notes: action.payload,
                updatingNotes: false
            }
        case ERROR_UPDATING_NOTE:
            return {
                ...state,
                fetchingNotes: false,
                addingNote: false,
                updatingNote: false,
                deletingNote: false
            }

        case DELETING_NOTE:
            return {
                ...state,
                deletingNotes: true
            }
        case DELETED_NOTE:
            return {
                ...state,
                notes: action.payload,
                deletingNotes: false
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