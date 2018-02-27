import {GET_NOTES, ADD_NOTES, FETCHING, ERROR_GETTING_NOTES} from '../actions/';

const initialState = {
    notes: [],
    fetching:false,
    error: null,
};

export const notes_reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return {...state, fetching: action.fetching};
        case GET_NOTES:
            return {
                ...state,
                notes: action.payload,
                fetching: false,
            };
        case ADD_NOTES:
            return {...state, notes: action.payload};
        default:
            return state;
    }
};
