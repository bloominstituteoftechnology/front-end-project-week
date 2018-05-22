import { PENDING, SUCCESS, SINGLE_NOTE, ERROR } from '../actions';

const initialState = {
    pending: false, 
    success: false, 
    error: false, 
    notes: [],
    currentNote: null,
    creating: false
}

export default (state=initialState, action) => {
    switch(action.type) {
        case PENDING:
            return Object.assign({}, state, {
                pending: true,
                success: false,
                error: false,
            })
        case SUCCESS:
            return Object.assign({}, state, {
                pending: false,
                success: true,
                error: false,
                notes: action.payload
            })
        case SINGLE_NOTE: 
            return Object.assign({}, state, {
                pending: false,
                success: true,
                error: false,
                //creating: false,
                currentNote: action.payload
            })
        case ERROR:
            return Object.assign({}, state, {
                pending: false,
                success: false,
                creating: false,
                error: true
            })
        default:
            return state;
    }
}