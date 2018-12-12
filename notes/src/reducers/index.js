import {
    NOTES_FETCHING, 
    NOTES_FETCH_SUCCESS,
    NOTES_FETCH_FAILURE,
    DELETE_NOTE_START,
    DELETE_NOTE_SUCCESS,
    DELETE_NOTE_FAILURE,
    ADD_NOTE_START,
    ADD_NOTE_SUCCESS,
    ADD_NOTE_FAILURE,
    EDIT_NOTE_START,
    EDIT_NOTE_SUCCESS,
    EDIT_NOTE_FAILURE
 } from '../actions';

const initialState = {
    notes: [],
    fetchingNotes: false,
    error: false,
    deletingNote: false,
    addingNote: false,
    editingNote: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case NOTES_FETCHING:
            return {
                ...state,
                fetchingNotes: true
            }
        case NOTES_FETCH_SUCCESS:
            return {
                ...state,
                fetchingNotes: false,
                error: false,
                notes: action.payload
            }
        case NOTES_FETCH_FAILURE:
            return {
                ...state,
                fetchingNotes: false,
                error: action.payload
            }

        case DELETE_NOTE_START:
            return {
                ...state,
                deletingNote: true,
                error: false,
            }
        case DELETE_NOTE_SUCCESS:
            return {
                ...state,
                deletingNote: false,
                error: false,
            }
        case DELETE_NOTE_FAILURE:
            return {
                ...state,
                deletingNote: false,
                error: action.payload
            }
        case ADD_NOTE_START:
            return {
                ...state,
                addingNote: true,
                error: false,
            }
        case ADD_NOTE_SUCCESS:
            return {
                ...state,
                addingNote: false,
                error: false,
            }
        case ADD_NOTE_FAILURE:
            return {
                ...state,
                addingNote: false,
                error: action.payload,
            }

        case EDIT_NOTE_START:
            return {
                ...state,
                editingNote: true,
                error: false
            }
        case EDIT_NOTE_SUCCESS:
            return {
                ...state,
                editingNote: false,
                error: false,
                notes: action.payload
            }
        case EDIT_NOTE_FAILURE:
            return {
                ...state,
                editingNote: false,
                error: action.payload
            }

        default:
            return state;
    }
}

export default reducer;