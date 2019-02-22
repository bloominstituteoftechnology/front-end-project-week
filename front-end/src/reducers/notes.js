import { WORKING, FAILURE, SUCCESS, VIEW } from "../actions";

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
        case VIEW:
            return {
                ...state, ...{
                    note: action.note,
                    loading: false
                }
            };
        case WORKING:
            return {...state, ...{ loading: true }};
        case FAILURE:
            return {...state, ...{ error: JSON.stringify(action.error), loading: false }};
        default:
            return state;
    }
};
