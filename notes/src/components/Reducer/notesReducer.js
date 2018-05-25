import { FETCH_NOTES, DELETE_NOTE } from '../Actions'

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
        default:
            return state;
    }
};