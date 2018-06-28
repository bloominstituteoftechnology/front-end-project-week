import {
    RESET_STORE,
    UPDATING_ACCOUNT,
    ACCOUNT_UPDATED,
    FETCHING_NOTES,
    NOTES_FETCHED,
    ADDING_NOTE,
    NOTE_ADDED,
    UPDATING_NOTE,
    NOTE_UPDATED,
    DELETING_NOTE,
    NOTE_DELETED,
    ERROR
} from "../actions";

const initialState = {
    notes: [],
    id: '',
    updatingAccount: false,
    accountUpdated: false,
    fetchingNotes: false,
    notesFetched: false,
    addingNote: false,
    noteAdded: false,
    updatingNote: false,
    noteUpdated: false,
    deletingNote: false,
    noteDeleted: false,
    error: null
}


export const rootReducer = (state = initialState, action) => {

    switch (action.type) {

        case FETCHING_NOTES:
            return { ...state, fetchingNotes: true, error: null};
        case NOTES_FETCHED:
            return { ...state, fetchingNotes: false, notesFetched: true, notes: action.payload}

        case ADDING_NOTE:
            return { ...state, addingNote: true, error: null};
        case NOTE_ADDED:
            return { ...state, addingNote: false, noteAdded: true, notes: state.notes.concat(action.payload)};

        case UPDATING_NOTE:
            return { ...state, updatingNote: true, error: null};
        case NOTE_UPDATED:
            return { ...state, updatingNote: false, noteUpdated: true, notes: state.notes.slice(0, state.notes.findIndex(note => note.id === action.payload.id)).concat(action.payload).concat(state.notes.slice(state.notes.findIndex(note => note.id === action.payload.id) + 1))};

        case DELETING_NOTE:
            return { ...state, deletingNote: true, error: null};
        case NOTE_DELETED:
            return { ...state, deletingNote: false, noteDeleted: true, notes: state.notes.slice(0, state.notes.findIndex(note => note.id === action.payload)).concat(state.notes.slice(state.notes.findIndex(note => note.id === action.payload) + 1))};

        case UPDATING_ACCOUNT:
            return {...state, updatingAccount: true, error: null};
        case ACCOUNT_UPDATED:
            return {...state, updatingAccount: false, accountUpdated: true, id: state.id.concat(action.payload)};

        case RESET_STORE:
            return {...initialState };
        
        case ERROR:
            return { ...state, error: action.payload, noteAdded: false, noteUpdated: false, noteDeleted: false, accountUpdated: false };

        default:
            return state;
    }
};

export default rootReducer;