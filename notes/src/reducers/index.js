import {
    FETCHING,
    RECIEVED,
    ERROR
} from '../actions';

const initialState = {
    notes: [],
    fetching: false,
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCHING:
            return Object.assign({}, state, { 
                fetching: true 
            })
        case RECIEVED:
            return Object.assign({}, state, {
                notes: state.notes.concat(action.payload),
                fetching: false
            })
        case ERROR:
            return Object.assign({}, state, {
                fetching: false,
                error: action.payload
            })
        default:
            return state;
    }
}