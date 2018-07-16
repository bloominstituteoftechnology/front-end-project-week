import { FETCHING_NOTES, FETCHED_NOTES, FETCHED_NOTE, ERROR } from '../actions';

const initialState = {
    fetchingNotes: false,
    notes: [],
    singleNote: {},
    error: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_NOTES:
            return { ...state, fetchingNotes: true };
        case FETCHED_NOTES:
            return { ...state, fetchingNotes: false, notes: action.payload };
        case FETCHED_NOTE:
            return { ...state, fetchingNotes: false, singleNote: action.payload };
        case ERROR:
            return { ...state, fetchingNotes: false, error: action.payload };
        default:
            return state;
    }
}