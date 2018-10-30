import * as actionTypes from '../actions';

const initialState = {
    notes: [],
    gettingNotes: false,
    creatingNotes: false,
    error: null
};

export const noteReducer = ( state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GETTING_NOTES:
            return {
                ...state,
                gettingNotes: true
            };
        case actionTypes.GET_NOTE_SUCCESS:
        console.log('action', action)
            return {
                ...state,
                gettingNotes: false,
                notes: action.payload
            };
        case actionTypes.ERROR:
            return {
                ...state,
                gettingNotes: false,
                creatingNote: false
            };
        case actionTypes.CREATING_NOTE:
            return {
                ...state,
                creatingNote: true
            };
        case actionTypes.CREATE_NOTE_SUCCESS:
            return {
                ...state,
                creatingNote: false,
                notes: action.payload
            };
        default:
        return state;
    }
}