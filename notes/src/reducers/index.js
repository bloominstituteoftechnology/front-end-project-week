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
                // notes: [action.payload]
            };
        case UPDATED:
            return {
                ...state,
                // notes: [action.payload]
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