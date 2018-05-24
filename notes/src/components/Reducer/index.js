import { FETCH_NOTES, DELETE_NOTE, ADD_NOTE } from '../Actions'

const initialState = {
    notes: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NOTES:
            return {
                ...state,
                notes: action.payload
            }

        case DELETE_NOTE:
            return {
                ...state,
            }
        default:
            return state;
    }
};