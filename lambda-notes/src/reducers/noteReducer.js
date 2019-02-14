import { GET_NOTES, DELETE_NOTE, ADD_NOTE, GET_NOTE, UPDATE_NOTE } from '../actions/types';

const initialState = {
    notes: [],
    note: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_NOTES:
            return {
                ...state,
                notes: action.payload
            };
        case GET_NOTE:
            return {
                ...state,
                note: action.payload
            }
        case DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter(note => note._id !== action.payload)
            };

        case ADD_NOTE:
            return {
                ...state,
                notes: [action.payload, ...state.notes]
            };
        case UPDATE_NOTE:
            return {
                ...state,
                notes: state.notes.map(note => note._id === action.payload._id ? (note = action.payload) : note)
            };

        default:
            return state;
    }
}