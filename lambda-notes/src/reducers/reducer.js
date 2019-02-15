import {FETCHING, SUCCESS, ERROR, CURRENT_NOTE} from '../actions/actions';

const initialState = {
    fetching: false,
    notes: [],
    currentNote: {},
    error: '',
    height: window.innerHeight
}

export const reducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCHING:
            return Object.assign({}, state, {
                fetching: true,
                error: ''
            })
        case SUCCESS:
            return Object.assign({}, state, {
                fetching: false,
                notes: action.notes,
                error: false
            })
        case ERROR:
            return Object.assign({}, state, {
                fetching: false,
                error: action.errorMessage
            })
        case CURRENT_NOTE:
            return Object.assign({}, state, {
                currentNote: action.currentNote
            })
        default:
            return state;
    }
}