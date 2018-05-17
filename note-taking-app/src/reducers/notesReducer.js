import {
    GET_NOTES
} from '../actions';

const initialState = {
    notes: [],
}

export const notesReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_NOTES:
            return { notes: action.notes }
        default:
            return state
    }
}