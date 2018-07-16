import { FETCHING_NOTES, NOTES_FETCHED, FETCHING_NOTE, NOTE_FETCHED, CREATING_NOTE, NOTE_CREATED, EDITING_NOTE, NOTE_EDITED, DELETING_NOTE, NOTE_DELETED, ERROR, SET_NULL } from '../actions';

const initialState = {
    fetchingNotes: false,
    notesFetched: false,
    fetchingNote: false,
    noteFetched: false,
    creatingNote: false,
    noteCreated: false,
    editingNote: false,
    noteEdited: false,
    deletingNote: false,
    noteDeleted: false,
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
            let data = JSON.parse(action.payload.config.data);
            data._id = action.payload.data.success;
            
            let createNote = state.notes.slice();
            createNote.push(data);
            
            return { ...state, notes: createNote, creatingNote: false, noteCreated: true };

        case EDITING_NOTE:
            return { ...state, editingNote: true };

        case NOTE_EDITED:
            let updateNote = state.notes.slice().map(note => {
                if (note._id === action.payload._id) {
                    note = action.payload;
                    return note;
                }
                return note;
            })
            return { ...state, notes: updateNote, editingNote: false, noteEdited: true };

        case DELETING_NOTE:
            return { ...state, deletingNote: true };

        case NOTE_DELETED:
            let deleteNote = state.notes.slice().filter(note => note._id !== action.payload);
            return { ...state, notes: deleteNote, deleteNote: false, noteDeleted: true };

        case SET_NULL:
            return { ...state, note: [] }

        case ERROR:
            return { ...state, error: action.payload };

        default:
            return state;
    }
}