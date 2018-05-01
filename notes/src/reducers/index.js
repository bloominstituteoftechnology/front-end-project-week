import { ADD_NOTE } from '../actions';

const reducer = (state = [], action) => {
    switch(action.type) {
        case ADD_NOTE:
            return [...state, action.payload];
        default:
            return state
    }
}

export default reducer;