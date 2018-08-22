import * as types from '../actions/types';

const initialState = {
    notes: [],
    note: {},
    error: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case (types.FETCHING_NOTES):
            return Object.assign({}, state);
        case (types.NOTES_FETCHED):
            return Object.assign({}, state, { notes: action.payload, error: {} });
        case (types.FETCH_SINGLE_NOTE):
            return Object.assign({}, state, { note: action.payload, error: {} });
        case (types.DELETE_NOTE):
            return Object.assign({}, state, { notes: action.payload, error: {} });
        case (types.ADD_NOTE):
            return Object.assign({}, state, { notes: action.payload, error: {} });
        case (types.UPDATE_NOTE):
            return Object.assign({}, state, { note: action.payload, error: {} });
        case (types.FETCH_ERROR):
            return Object.assign({}, state, { error: action.error.response });
        default:
            return state;
    }
}