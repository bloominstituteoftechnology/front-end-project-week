import * as types from '../actions/types';

const initialState = {
    notes: [{
        "tags": [],
        "_id": "",
        "title": "",
        "textBody": "",
        "__v": 0
    }],
    note: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case (types.FETCH_NOTES):
            return Object.assign({}, state, { notes: action.payload });
        case (types.FETCH_SINGLE_NOTE):
            return Object.assign({}, state, { note: action.payload });
        case (types.DELETE_NOTE):
            return Object.assign({}, state);
        case (types.FETCH_ERROR):
            console.log(action.error);
        default:
            return state;
    }
}