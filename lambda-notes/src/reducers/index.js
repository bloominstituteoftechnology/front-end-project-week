import { FETCHING_NOTES, NOTES_FETCHED, FETCHING_NOTE, NOTE_FETCHED, CREATING_NOTE, NOTE_CREATED, ERROR, SET_NULL } from '../actions';

const initialState = {
    fetchingNotes: false,
    notesFetched: false,
    fetchingNote: false,
    noteFetched: false,
    creatingNote: false,
    noteCreated: false,
    notes: [],
    note: [],
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_NOTES:
            return { ...state, fetchingNotes: true };

        case NOTES_FETCHED:
            return { ...state, notes: action.payload, fetchingNotes: false, notesFetched: true };

        case FETCHING_NOTE:
            return { ...state, fetchingNote: true };

        case NOTE_FETCHED:
            return { ...state, note: action.payload, fetchingNote: false, noteFetched: true };

        case CREATING_NOTE:
            return { ...state, creatingNote: true };

        case NOTE_CREATED:
            const createNote = state.notes.slice();
            createNote.push(action.payload);
            return { ...state, notes: createNote, creatingNote: false, noteCreated: true };

        case SET_NULL:
            return { ...state, note: [] }

        case ERROR:
            return { ...state, error: action.payload };

        default:
            return state;
    }
}