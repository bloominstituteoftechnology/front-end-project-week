import { FETCH_NOTES, FETCH_SINGLE_NOTE, FETCH_ERROR } from '../actions';

const initialState = {
    notes: [{
        "tags": [],
        "_id": "",
        "title": "",
        "textBody": "",
        "__v": 0
    }],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case (FETCH_NOTES):
            return Object.assign({}, state, { notes: action.payload });
        case (FETCH_SINGLE_NOTE):
            return Object.assign({}, state, { notes: action.payload })
        case (FETCH_ERROR):
            console.log(action.error);
        default:
            return state;
    }
}