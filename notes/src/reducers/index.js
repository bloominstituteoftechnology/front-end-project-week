import { FETCHING, FETCHALL, FETCHONE, ADDED, UPDATED, DELETED, ERROR } from '../actions';

const initialState = {
    fetching: false,
    notes: [],
    note: {},
    error: null
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