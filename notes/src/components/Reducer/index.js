import { FETCH_NOTES } from '../Actions'

const initialState = {
    notes: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NOTES:
            return Object.assign({}, state, {

            });
        default:
            return state;
    }
};