import * as actionTypes from '../actions';

const initialState = {
    notes: [],
    gettingNotes: false,
    error: null
};

export const noteReducer = ( state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GETTING_NOTES:
        return {
            ...state,
            gettingNotes: true
        };
        case actionTypes.NOTE_SUCCESS:
        return {
            ...state,
            gettingNotes: false,
            notes: action.payload
        };
        case actionTypes.ERROR:
        return {
            ...state,
            gettingNotes: false
        };
        default:
        return state;
    }
}