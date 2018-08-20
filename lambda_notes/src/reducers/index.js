import * as types from '../actions/types';

const initialState = {
    notes: [],
    note: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case (types.FETCHING_NOTES):
            return Object.assign({}, state);
        case (types.NOTES_FETCHED):
            return Object.assign({}, state, { notes: action.payload });
        // case (types.FETCH_SINGLE_NOTE):
        //     return Object.assign({}, state, { note: action.payload });
        // case (types.DELETE_NOTE):
        //     return Object.assign({}, state, { notes: action.payload });
        // case (types.ADD_NOTE):
        //     return Object.assign({}, state, { notes: action.payload });
        // case (types.UPDATE_NOTE):
        //     return Object.assign({}, state, { note: action.payload });
        case (types.FETCH_ERROR):
            console.log(action.error);
            break;
        default:
            return state;
    }
}