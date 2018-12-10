import { ADD_NOTE_START,
         ADD_NOTE_SUCCESS, 
         ADD_NOTE_FAILURE, 
         FETCH_NOTE_START, 
         FETCH_NOTE_SUCCESS, 
         FETCH_NOTE_FAILURE, 
         EDIT_NOTE_START, 
         EDIT_NOTE_SUCCESS, 
         EDIT_NOTE_FAILURE, 
         DELETE_NOTE_START,
         DELETE_NOTE_SUCCESS,
         DELETE_NOTE_FAILURE
        } from '../actions';

const initialState = {
    notes: [],
    fetchingNotes: false,
    addingNotes: false,
    editingNotes: false,
    deletingNotes: false,
    error: null,
}

const notesReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_NOTE_START:
            return {
                ...state,
                fetchingNotes: true,
            }
        case FETCH_NOTE_SUCCESS:
            return {
                ...state,
                notes: action.payload,
                fetchingNotes: false,
                error: null,
            }
        case FETCH_NOTE_FAILURE:
            return {
                ...state,
                fetchingNotes: false,
                error: action.payload,
            }
        case ADD_NOTE_START:
            return {
                ...state,
                addingNotes: true,
            }
        case ADD_NOTE_SUCCESS:
            return {
                ...state,
                addingNotes: false,
                error: null,
                // notes: action.payload,
            }
        case ADD_NOTE_FAILURE:
            return {
                ...state,
                addingNotes: false,
                error: action.payload,
            }
        case EDIT_NOTE_START:
            return {
                ...state,
                editingNotes: true,
            }
        case EDIT_NOTE_SUCCESS:
            return {
                ...state,
                editingNotes: false,
                error: null,
            }
        case EDIT_NOTE_FAILURE:
            return {
                ...state,
                editingNotes: false,
                error: action.payload,
            }
        case DELETE_NOTE_START:
            return {
                ...state,
                deletingNotes: true,
            }
        case DELETE_NOTE_SUCCESS:
            return {
                ...state,
                deletingNotes: false,
                error: null,
            }
        case DELETE_NOTE_FAILURE:
            return {
                ...state,
                deletingNotes: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

export default notesReducer;