import { FETCHING, FETCHED, ADDED, UPDATED, ERROR } from '../actions';

const initialState = {
    fetching: false,
    notes: [],
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING: 
            return { ...state, fetching: true};
        case FETCHED:
            return { 
                ...state, 
                fetching: false, 
                notes: [...state.notes, ...action.payload]
            };
        case ADDED: 
            return {
                ...state,
                //notes: [...state.notes, action.payload] new note may need to be part of application state to work around payload of just the ID
            };
        case UPDATED:
            console.log(action.payload)
            return {
                ...state,
                notes: state.notes.map(note => {
                    return note._id === action.payload._id ? action.payload : note
                })
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