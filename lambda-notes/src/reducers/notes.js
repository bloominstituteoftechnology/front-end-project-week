import { FETCHING, FETCHED, ERROR } from '../actions';

const initialState = {
    notes: [],  
    fetching: false,
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return { ...state, fetching: true };
        case FETCHED:
            return { ...state, notes: action.notes, fetching: false, error: false };
        default:
            return state;
    }
};