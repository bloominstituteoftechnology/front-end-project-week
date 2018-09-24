import {
    NOTES_FETCH_START,
    NOTES_FETCH_COMPLETE,
    NOTES_FETCH_ERROR,
} from '../actions';

const initialState = {
    notes: [],
    fetchingNotes: false,
    error: null
};

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case NOTES_FETCH_START:
            return { ...state, fetchingNotes: true };
        case NOTES_FETCH_COMPLETE:
            return { ...state, fetchingNotes: false, notes: action.payload };
        case NOTES_FETCH_ERROR:
            console.log(action.payload);
            return { ...state, fetchingNotes: false, error: action.payload };
        default:
            return state;
    }
};