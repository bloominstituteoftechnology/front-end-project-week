import { FETCHED_NOTES, FETCHING_NOTES, ERROR_FETCHING_NOTES, 
        ADDED_NOTE, ADDING_NOTE, ERROR_ADDING_NOTE, 
        PICK_NOTE, UPDATED_NOTE, UPDATING_NOTE, ERROR_UPDATING_NOTE, 
        DELETED_NOTE, DELETING_NOTE, ERROR_DELETING_NOTE } from '../actions';

const initialState = {
    notes: [
        {
            title: "",
            textBody: ""
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
        console.log("FETCHING_NOTES");
            return {
                ...state,
                fetchingNotes: true,
                fetchedNotes: false
            }
        case FETCHED_NOTES:
        console.log("FETCHED_NOTES");
            return {
                ...state,
                notes: action.payload,
                fetchingNotes: false,
                fetchedNotes: true
            }
        case ERROR_FETCHING_NOTES:
        console.log("ERROR_FETCHING_NOTES");
            return {
                ...state,
                fetchingNotes: false,
                addingNote: false,
                updatingNote: false,
                deletingNote: false
            }

        case ADDING_NOTE:
        console.log("ADDING_NOTES");
            return {
                ...state,
                addingNotes: true
            }
        case ADDED_NOTE:
        console.log("ADDED_NOTES");
            return {
                ...state,
                addingNotes: false
            }
        case ERROR_ADDING_NOTE:
        console.log("ERROR_ADDING_NOTES");
            return {
                ...state,
                fetchingNotes: false,
                addingNote: false,
                updatingNote: false,
                deletingNote: false
            }

        case PICK_NOTE:
            console.log("PICK_NOTE");
            const note = state.notes.find(note => note.id === action.payload);
            return { 
                ...state, 
                noteToUpdate: note ? note : null 
            }
        case UPDATING_NOTE:
            console.log("UPDATING_NOTES");
            return {
                ...state,
                updatingNotes: true
            }
        case UPDATED_NOTE:
        console.log("UPDATED_NOTES");
            return {
                ...state,
                updatingNotes: false
            }
        case ERROR_UPDATING_NOTE:
        console.log("ERROR_UPDATING_NOTES");
            return {
                ...state,
                fetchingNotes: false,
                addingNote: false,
                updatingNote: false,
                deletingNote: false
            }

        case DELETING_NOTE:
        console.log("DELETING_NOTES");
            return {
                ...state,
                deletingNotes: true
            }
        case DELETED_NOTE:
        console.log("DELETED_NOTES");
            return {
                ...state,
                deletingNotes: false
            }
        case ERROR_DELETING_NOTE:
        console.log("ERROR_DELETING_NOTES");
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