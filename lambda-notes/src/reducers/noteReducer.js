import { LOADING, GET_NOTES, DELETE_NOTE, ADD_NOTE, FETCH_NOTE, UPDATE_NOTE, ERROR } from '../actions/noteActions';

const initialState = {
    notes: [],
    note: null,
    loading: false,
    error: ''
}

export const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: true }
        case GET_NOTES:
            return { ...state, notes: action.payload, loading: false }
        case ADD_NOTE:
            return { ...state, notes: [...action.payload], loading: false }
        case DELETE_NOTE:
            return { ...state, notes: action.payload, loading: false }
        case UPDATE_NOTE:
            return { ...state, note: action.payload, loading: false }
        case FETCH_NOTE:
            return { ...state, notes: action.payload, loading: false }
        case ERROR:
            return { ...state, error: action.errorMessage, loading: false }
        default:
            return state
    }
}