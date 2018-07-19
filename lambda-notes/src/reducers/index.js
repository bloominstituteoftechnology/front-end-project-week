import { FETCHING_NOTES, FETCHED_NOTES, FETCHED_NOTE, SET_SEARCHED, ERROR } from '../actions';

const initialState = {
    fetchingNotes: false,
    notes: [],
    searchedNotes: [],
    singleNote: {},
    error: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        // sets fetchingNotes to true so components will know to wait to render content
        case FETCHING_NOTES:
            return { ...state, fetchingNotes: true };
        // places fetched notes on state
        case FETCHED_NOTES:
            return { ...state, fetchingNotes: false, notes: action.payload, searchedNotes: [] };
        // places the note requested by user to state
        case FETCHED_NOTE:
            return { ...state, fetchingNotes: false, singleNote: action.payload };
        case SET_SEARCHED:
            console.log(action.payload);
            let searchNote = []
            if(action.payload.length === 0) {
                searchNote = [{
                    noMatch: 'There are no matches',
                }];
            } else {
                searchNote = action.payload;
            }
            return { ...state, searchedNotes: searchNote};
        // places server error message on state
        case ERROR:
            return { ...state, fetchingNotes: false, error: action.payload };
        default:
            return state;
    }
}