import { LOADING, GET_NOTES, GET_NOTE, ERROR_MESSAGE } from '../actions/index';

const initialState = {
    notes: [],
    loading: false,
    error: '',
    currentNote: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case LOADING:
            return Object.assign({}, state, {loading: true})

        case GET_NOTES:
            return Object.assign({}, state, {notes: action.notes, loading: false, error: ''})

        case GET_NOTE:
            return Object.assign({}, state, {notes: action.notes, loading: false, error: ''})

        case ERROR_MESSAGE:
            return Object.assign({}, state, {error: action.actionMessage, loading: false})

        default:
            return state 
    }
}