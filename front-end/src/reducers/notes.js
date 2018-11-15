import { FETCHING, FAILURE, SUCCESS, ADDING } from "../actions";

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
                    notes: action.notes,
                    loading: false
                }
            };
        case FETCHING:
            return {...state, ...{ loading: true }};
        case ADDING:
            return {...state, ...{ loading: true }};
        case FAILURE:
            return {...state, ...{ error: action.error, loading: false }};
        default:
            return state;
    }
};
