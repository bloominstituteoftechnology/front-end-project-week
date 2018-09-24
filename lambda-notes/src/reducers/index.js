import * as actionTypes from '../actions';

const initialState = {
    notes: [],
    fetchingNotes: false, 
    fetchedNotes: false,   
    savingNotes: false,
    savedNotes: false,
    updatingNote: false,
    updatedNote: false,
    deletingNote: false,
    deletedNote: false,
    error: null  
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCHING_NOTES:
            return {
                ...state,
                fetchingNotes: true
            }
        case actionTypes.FETCHED_NOTES:
            return {
                ...state,
                fetchingNotes: false,
                fetchedNotes: true,
                notes: action.payload
            }
        case actionTypes.SAVING_NOTES:
            return {
                ...state,
                savingNotes: true,                
            }
        case actionTypes.SAVED_NOTES:
            return {
                ...state,
                savingNotes: false,
                savedNotes: true,
                notes: action.payload
            }
        case actionTypes.UPDATING_NOTES:
            return {
                ...state,
                updatingNote: true
            }
        case actionTypes.UPDATED_NOTES:
            return {
                ...state,
                updatingNote: false,
                updatedNote: true,
                notes: action.payload
            }
        case actionTypes.DELETING_NOTES:
            return {
                ...state,
                updatingNote: true
            }
        case actionTypes.DELETED_NOTES:
            return {
                ...state,
                updatingNote: false,
                updatedNote: true,
                notes: action.payload
            }
        case actionTypes.ERROR:
            return {
                ...state,
                fetchingNotes: false,
                savingNotes: false,
                updatingNote: false,
                deletingNote: false                
            }
        default:
            return state;
    }
}