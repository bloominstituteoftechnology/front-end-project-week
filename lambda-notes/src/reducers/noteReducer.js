import { GET_NOTES, DELETE_NOTE, ADD_NOTE } from '../actions/types';

const initialState = {
    notes: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_NOTES:
            return {
                ...state,
                notes: action.payload
            };

        case DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload)
            };

        case ADD_NOTE:
            return {
                ...state,
                notes: [action.payload, ...state.notes]
            };


        default:
            return state;
    }
}