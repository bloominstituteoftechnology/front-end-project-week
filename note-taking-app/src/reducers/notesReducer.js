import { ADD_NOTES, EDIT_NOTES, DELETE_NOTES } from '../actions';

const initialState = {
    data: [],
    addNotes: false,
    editNotes: false,
    deleteNotes: false,
    error: null
};

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_NOTES": {
            return {...state, addNotes: true}
        }
        case "EDIT_NOTES": {
            return {...state, data: action.payload, editNotes: true}
        }
        case "DELETE_NOTES": {
            return {...state, data: action.payload, deleteNotes: true}
        }
        case "ERROR": {
            return {
                ...state,
                addNotes: false,
                editNotes: false,
                deleteNotes: false,
                error: action.payload
             }
        }
        default:
            return state;
    }
};