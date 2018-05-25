import { FETCH_USER, LOG_IN, LOG_OUT } from "../Actions";

const initialState = {
    user: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER:
            return {
                ...state,
                user: action.payload.user
            }
        case LOG_IN:
            return {
                ...state,
                user: action.payload.user
            }
        case LOG_OUT:
            return {
                ...state,
                user: null
            }
        default:
            return state;
    }
};