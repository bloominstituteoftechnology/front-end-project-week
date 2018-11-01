import { FETCHING, FETCHALL, FETCHONE, ADDED, ADDIMPORTANT, UPDATED, DELETED, ERROR } from '../actions';

const initialState = {
    fetching: false,
    notes: [],
    note: {},
    newNote: '',
    error: null,
    importantNotes: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING: 
            return { ...state, fetching: true};
        case FETCHALL:
            return { 
                ...state, 
                fetching: false, 
                notes: [...action.payload]
            };
        case FETCHONE:
            return { 
                ...state, 
                fetching: false, 
                note: action.payload
            };
        case ADDED: 
            return {
                ...state,
                newNote: action.payload.success
            };
        case ADDIMPORTANT:
            return {
                ...state, 
                importantNotes: action.payload ? [...state.importantNotes, state.newNote] : [...state.importantNotes]
            };
        case UPDATED:
            return {
                ...state,
                notes: state.notes.map(note => {
                    return note._id === action.payload._id ? action.payload : note
                })
            };
        case DELETED: 
            return {
                ...state,
            };
        case ERROR: 
            return { 
                ...state, 
                fetching: false,
                error: action.payload 
            };
        default:
            return state;
    }
}