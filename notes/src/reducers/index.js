// Action Type Imports
import { 
    FETCH_NOTES,
    FETCH_ALL_SUCCESS,
    FETCH_ONE_SUCCESS,
    FETCH_FAIL,
 } from '../actions';

// Initial State 
const initialState = {
    fetchingNotes: false,
    fetchingNote: false,
    creatingNote: false,
    updatingNote: false,
    deletingNote: false,
    notes: [],
    error: null
};

// Reducer
const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_NOTES:
            return {
                ...state,
                fetchingNotes: true
            }

        case FETCH_ALL_SUCCESS:
            return {
                ...state,
                fetchingNotes: false,
                notes: action.payload,
                error: null
            }

        case FETCH_FAIL:
            return {
                ...state,
                fetchingNotes: false,
                error: action.payload
            }
        
        default: 
            return state;
}
}
export default reducer;