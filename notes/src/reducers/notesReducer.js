import {
    FETCHING,
    SUCCESS,
    FAILURE,
    ADDING,
    ADDED,
    ADD_FAILURE,
    EDITING,
    EDITED,
    EDIT_FAILURE,
    DELETING,
    DELETED,
    DELETE_FAILURE,
    FETCHING_NOTE,
    FETCHED_NOTE,
    FETCH_FAILURE
} from '../actions';

const initialState = {
    notes: [],
    note: {},
    fetching: false,
    fetched: false,
    fetchingNote: false,
    fetchedNote: false,
    adding: false,
    added: false,
    editing: false,
    edited: false,
    deleting: false,
    deleted: false,
    error: null,
    noteShape: {
        title: '',
        textBody: '',
        id: ''
    }
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TITLESET':
            return {
                ...state,
                noteShape: {
                    ...state.noteShape,
                    title: action.payload
                }
            }
        case 'BODYSET':
            return {
                ...state,
                noteShape: {
                    ...state.noteShape,
                    textBody: action.payload
                }
            }
        case 'IDSET':
            return {
                ...state,
                noteShape: {
                    ...state.noteShape,
                    id: action.payload
                }
            }
        case FETCHING:
            return {
                ...state,
                fetching: true
            }
        case SUCCESS:
            return {
                ...state,
                notes: [
                    ...state.notes,
                    ...action.payload
                ],
                fetching: false,
                fetched: true
            }
        case FAILURE:
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        case FETCHING_NOTE:
            return {
                ...state,
                fetchingNote: true
            }
        case FETCHED_NOTE:
            return {
                ...state,
                fetchingNote: false,
                fetchedNote: true,
                note: {
                    ...action.payload
                }
            }
        case FETCH_FAILURE:
            return {
                ...state,
                fetchingNote: false,
                error: action.payload
            }
        case ADDING:
            return {
                ...state,
                adding: true
            }
        case ADDED:
            return {
                ...state,
                adding: false,
                added: true,
                notes: [
                    ...state.notes,
                    action.payload
                ]
            }
        case ADD_FAILURE:
            return {
                ...state,
                adding: false,
                error: action.payload
            }
        case EDITING:
            return {
                ...state,
                editing: true
            }
        case EDITED:
            return {
                ...state,
                editing: false,
                edited: true,
                notes: [
                    ...state.notes,
                    action.payload
                ]
            }
        case EDIT_FAILURE:
            return {
                ...state,
                editing: false,
                error: action.payload
            }
        case DELETING:
            return {
                ...state,
                deleting: true,
            }
        case DELETED:
            return {
                ...state,
                deleting: false,
                deleted: true,
                notes: [
                    ...state.notes,
                    action.payload
                ]
            }
        case DELETE_FAILURE:
            return {
                ...state,
                deleting: false,
                error: action.payload
            }
        default:
            return state;
    }
}
