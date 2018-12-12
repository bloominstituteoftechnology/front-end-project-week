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
         DELETE_NOTE_FAILURE,
         SORT_A_TO_Z,
         SORT_Z_TO_A
        } from '../actions';

const initialState = {
    notes: [],
    fetchingNotes: false,
    updatingNotes: false,
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
                updatingNotes: true,
            }
        case ADD_NOTE_SUCCESS:
            return {
                ...state,
                updatingNotes: false,
                error: null,
            }
        case ADD_NOTE_FAILURE:
            return {
                ...state,
                updatingNotes: false,
                error: action.payload,
            }
        case EDIT_NOTE_START:
            return {
                ...state,
                updatingNotes: true,
            }
        case EDIT_NOTE_SUCCESS:
            return {
                ...state,
                updatingNotes: false,
                error: null,
            }
        case EDIT_NOTE_FAILURE:
            return {
                ...state,
                updatingNotes: false,
                error: action.payload,
            }
        case DELETE_NOTE_START:
            return {
                ...state,
                updatingNotes: true,
            }
        case DELETE_NOTE_SUCCESS:
            return {
                ...state,
                updatingNotes: false,
                error: null,
            }
        case DELETE_NOTE_FAILURE:
            return {
                ...state,
                updatingNotes: false,
                error: action.payload,
            }
        case SORT_A_TO_Z:
            return {
                ...state,
                notes: action.payload
            }
        case SORT_Z_TO_A:
            return {
                ...state,
                notes: action.payload
            }
        default:
            return state;
    }
}

export default notesReducer;