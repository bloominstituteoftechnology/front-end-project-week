import { ADD_NOTE, VIEW_NOTES } from '../actions';

const defaultState = {
    notes: []
}

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_NOTE:
            return Object.assign({}, state, {notes: [...state.notes, action.payload]});
        case VIEW_NOTES:
            return state;
        default:
            return state
    }
}

export default reducer;