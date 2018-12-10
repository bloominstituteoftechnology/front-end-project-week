import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE, NOTE_FETCH_SUCCESS } from "../actions";

const initialState = {
    err: null,
    fetching: false,
    note: {},
    notes: [],
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                fetching: true,
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                fetching: false,
                notes: action.payload,
            }
        case FETCH_FAILURE:
            return {
                ...state,
                err: action.payload,
                fetching: false,
            }
        case NOTE_FETCH_SUCCESS:
            return {
                ...state,
                fetching: false,
                note: action.payload
            }
        default:
            return {
                ...state
            }
    }
}