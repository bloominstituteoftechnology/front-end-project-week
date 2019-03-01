import * as actionTypes from '../actions';

const initialState = {
    notes: [],
    gettingNotes: false,
    updatingNote: false,
    creatingNote: false,
    error: null,
    deletingNote: false
};

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GETTING_NOTES:
            return {
                ...state, 
                gettingNotes: true 
            };
            
        case actionTypes.GET_NOTES:
            return {
                ...state, 
                notes: action.payload, 
                gettingNotes: false
            };

        case actionTypes.UPDATING_NOTE:
            return {
                ...state, 
                updatingNote: true
            };

        case actionTypes.UPDATE_NOTE:
            return {
                ...state, 
                notes: action.payload, 
                updatingNote: false
            };

        case actionTypes.CREATING_NOTE:
            return {
                ...state, 
                creatingNote: true
            };

        case actionTypes.CREATE_NOTE:
            return {
                ...state, 
                notes: action.payload, 
                creatingNote: false 
            };

        case actionTypes.DELETING_NOTE:
            return {
                ...state, 
                deletingNote: true 
            };

        case actionTypes.DELETE_NOTE:
            return {
                ...state, 
                friends: action.payload, 
                deletingNote: false 
            };
            
        case actionTypes.ERROR:
            return {
                ...state,
                gettingNotes: false,
                updatingNote: false,
                creatingNote: false,
                deletingNote: false,
                error: action.payload
            };

        default:
            return state;
    }
};

