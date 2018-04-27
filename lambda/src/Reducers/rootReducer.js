import { 
    FETCHING_NOTES, GET_NOTES_ERROR, FETCHED_NOTES,
    PUTTING_NOTE, PUT_NOTE_ERROR, PUT_NOTE,
    POSTING_NOTE, POST_NOTE_ERROR, POSTED_NOTE,
    DELETING_NOTE, DELETE_NOTE_ERROR, DELETED_NOTE } from '../Actions/index.js';

const initialState = {
    gettingNotes: false,
    postingNote: false,
    deletingNote: false,
    puttingNote: false,
    notes: [],
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_NOTES:
            return { ...state, gettingNotes: true };
        case GET_NOTES_ERROR:
            return { ...state, error: action.errorMessage };
        case FETCHED_NOTES:
            return { ...state, notes: action.notes, gettingNotes: false, error: false };
        
        case PUTTING_NOTE:
            return { ...state, puttingNote: true };
        case PUT_NOTE_ERROR:
            return { ...state, error: action.errorMessage };
        case PUT_NOTE:
            return { ...state, notes: action.note, puttingNote: false };

        case POSTING_NOTE:
            return { ...state, postingNote: true };
        case POST_NOTE_ERROR:
            return { ...state, error: action.errorMessage };
        case POSTED_NOTE:
            return { ...state, postingNote: false, error: null };

        case DELETING_NOTE:
            return { ...state, deletingNote: true };
        case DELETE_NOTE_ERROR:
            return { ...state, error: action.errorMessage };
        case DELETED_NOTE:
            return { ...state, notes: action.notes, deletingNote: false, error: null };
        default:
            return state;
    }
};