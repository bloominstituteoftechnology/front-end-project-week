import { FETCHING_NOTES, NOTES_FETCHED, CREATING_NOTE, NOTE_CREATED, ERROR } from '../actions';

const initialState = {
    fetchingNotes: false,
    notesFetched: false,
    creatingNote: false,
    noteCreated: false,
    notes: [],
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_NOTES:
            return { ...state, fetchingNotes: true };

        case NOTES_FETCHED:
            return { ...state, notes: action.payload, fetchingNotes: false, notesFetched: true };

        case CREATING_NOTE:
            return { ...state, creatingNote: true };

        case NOTE_CREATED:
            const createNote = state.notes.slice();
            createNote.push(action.payload);
            return { ...state, notes: createNote, creatingNote: false, noteCreated: true };

        case ERROR:
            return { ...state, error: action.payload };

        default:
            return state;
    }
}