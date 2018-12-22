import { GET_NOTES, CREATE_NOTE } from '../actions';

const initialState = {
    notes: [],
    fetchingNotes: false,
    addingNote: false,
    updatingNote: false,
    deletingNote: false,
    error: null
}

//Root reducer logic
export default (state = initialState, action) => {
    switch (action.type) {

        case GET_NOTES:
            return {
                ...state,
                notes: action.payload
            };
            
        case CREATE_NOTE:
            return {
                ...state,
                notes: [...action.payload]
            }

        default: return state;
    }
}