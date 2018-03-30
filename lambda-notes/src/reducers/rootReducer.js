import { FETCHING_NOTES, GET_NOTES_ERROR, FETCHED_NOTES,
    PUTTING_NOTE, PUT_NOTE_ERROR, PUT_NOTE } from '../actions';

// initial app state
const initialState = {
    gettingNotes: false,
    postingNotes: false,
    deletingNotes: false,
    puttingNotes: false,
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
            return { ...state, puttingNotes: true };
        case PUT_NOTE_ERROR:
            return { ...state, error: action.errorMessage };
        case PUT_NOTE:
            return { ...state, notes: [...state, action.note], puttingNotes: false };

        // case POSTING_NOTE:
        // case POST_NOTE_ERROR:
        // case POSTED_NOTE:

        // case DELETING_NOTE:
        // case DELETE_NOTE_ERROR:
        // case DELETED_NOTE:
        default:
            return state;
    }
};