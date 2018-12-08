import { 
    FETCHING_START,
    FETCHING_SUCCESS,
    FETCHING_FAILURE,
    ADD_NOTE_START,
    ADD_NOTE_SUCCESS,
    ADD_NOTE_FAILURE,
} from '../actions';

const initialState = {
    notes: [],
    fetching: false,
    adding: false,
    error: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        // Adding Note Cases
        case ADD_NOTE_START:
            return {
                ...state,
                // adding: true,
            };
        case ADD_NOTE_SUCCESS:
            return {
                ...state,
                error: null,
                adding: false,
            };
        case ADD_NOTE_FAILURE:
            return {
                ...state,
                error: action.payload,
                adding: false,
            };

        // Fetching Cases
        case FETCHING_START:
            return {
                ...state,
                fetching: true,
            };
        case FETCHING_SUCCESS:
            return {
                ...state,
                error: null,
                fetching: false,
                notes: action.payload,
            };
        case FETCHING_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetching: false,
            };
        default:
            return state;
    }
};