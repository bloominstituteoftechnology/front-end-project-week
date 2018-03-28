import { FETCHING_NOTES, GET_NOTES_ERROR, FETCHED_NOTES } from '../actions';

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