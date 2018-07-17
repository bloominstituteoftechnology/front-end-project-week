import { FETCHING_NOTES, FETCHED_NOTES, FETCHED_NOTE, FETCH_NEW, ERROR } from '../actions';

const initialState = {
    fetchingNotes: false,
    notes: [],
    singleNote: {},
    error: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        // sets fetchingNotes to true so components will no to wait to render content
        case FETCHING_NOTES:
            return { ...state, fetchingNotes: true };
        // places fetched notes on state
        case FETCHED_NOTES:
            return { ...state, fetchingNotes: false, notes: action.payload };
        // places the note requested by user to state
        case FETCHED_NOTE:
            return { ...state, fetchingNotes: false, singleNote: action.payload };
        // case FETCH_NEW:
        //     const newNote = state.notes.filter(note => note._id === action.payload);
        //     return { ...state, fetchingNotes: false, singleNote: newNote };
        // places server error message on state
        case ERROR:
            return { ...state, fetchingNotes: false, error: action.payload };
        default:
            return state;
    }
}