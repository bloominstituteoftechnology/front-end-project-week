// Action Type Imports
import { 
    CREATE_NOTE,
    CREATE_SUCCESS,
    FETCH_NOTES,
    FETCH_NOTE,
    FETCH_ALL_SUCCESS,
    FETCH_ONE_SUCCESS,
    FETCH_FAIL,
    DELETE_NOTE,
    DELETE_SUCCESS
 } from '../actions';

// Initial State 
const initialState = {
    fetchingNotes: false,
    fetchingNote: false,
    creatingNote: false,
    updatingNote: false,
    deletingNote: false,
    notes: [],
    note: null,
    error: null
};

// Reducer
const reducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_NOTE:
            return {
                ...state,
                creatingNote: true
            }

        case CREATE_SUCCESS:
            return {
                ...state,
                notes: state.notes,
                creatingNote: false
            }

        case FETCH_NOTES:
            return {
                ...state,
                fetchingNotes: true
            }

        case FETCH_NOTE:
            return {
                ...state,
                fetchingNote: true,
                note: null
            }

        case FETCH_ALL_SUCCESS:
            return {
                ...state,
                fetchingNotes: false,
                notes: action.payload,
                error: null
            }

        case FETCH_ONE_SUCCESS:
            return {
                ...state,
                fetchingNote: false,
                note: action.payload
            }

        case FETCH_FAIL:
            return {
                ...state,
                fetchingNotes: false,
                error: action.payload
            }
        case DELETE_NOTE:
            return {
                ...state,
                deletingNote: true
            }
        case DELETE_SUCCESS:
            return {
                ...state,
                deletingNote: false
            }
        
        default: 
            return state;
    }
}
export default reducer;