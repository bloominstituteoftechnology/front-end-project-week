import {FETCHING, FAILURE, SUCCESS} from "../actions";

const initialState = {
    notes: [],
    loading: false,
    error: false
};

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS:
            return {
                ...state, ...{
                    notes: action.notes
                };
        case FETCHING:
            return {...state, ...{loading: action.loading}};
        case FAILURE:
            return {...state, ...{error: action.error}};
        default:
            return state;
    }
};
