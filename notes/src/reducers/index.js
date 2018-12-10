import { NOTES_FETCHING, NOTES_FETCH_SUCCESS, NOTES_FETCH_FAILURE } from '../actions';

const initialState = {
    notes: [],
    fetchingNotes: false,
    error: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case NOTES_FETCHING:
            return {
                ...state,
                fetchingNotes: true
            }
        case NOTES_FETCH_SUCCESS:
            return {
                ...state,
                fetchingNotes: false,
                error: false,
                notes: action.payload
            }
        case NOTES_FETCH_FAILURE:
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