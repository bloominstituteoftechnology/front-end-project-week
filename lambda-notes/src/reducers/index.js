import { 
    FETCHING_START,
    FETCHING_SUCCESS,
    FETCHING_FAILURE,
    ADD_NOTE_START,
    ADD_NOTE_SUCCESS,
    ADD_NOTE_FAILURE,
    EDIT_NOTE_START,
    EDIT_NOTE_SUCCESS,
    EDIT_NOTE_FAILURE,
} from '../actions';

const initialState = {
    notes: [],
    fetching: false,
    adding: false,
    updating: false,
    error: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        // Updating Note Cases
        case EDIT_NOTE_START:
            return {
                ...state,
                updating: true,
            };
        case EDIT_NOTE_SUCCESS:
            return {
                ...state,
                error: null,
                updating: false,
            };
        case EDIT_NOTE_FAILURE:
            return {
                ...state,
                error: action.payload,
                updating: false,
            };

        // Adding Note Cases
        case ADD_NOTE_START:
            return {
                ...state,
                adding: true,
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