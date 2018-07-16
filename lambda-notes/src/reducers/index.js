import { FETCHING_NOTES, NOTES_FETCHED, CREATING_NOTE, NOTE_CREATED, ERROR } from '../actions';

const initialState = {
    fetchingNotes: false,
    notesFetched: false,
    notes: [],
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_NOTES:
            console.log('test');
            return { ...state, fetchingNotes: true };

        case NOTES_FETCHED:
            return { ...state, notes: action.payload, fetchingNotes: false, notesFetched: true };

        default:
            return state;
    }
}