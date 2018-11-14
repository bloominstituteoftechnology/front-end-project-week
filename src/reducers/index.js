import { LOADING, GET_NOTES, GET_NOTE, ERROR_MESSAGE, UPDATE_NOTE } from '../actions/index';

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
            return Object.assign({}, state, {currentNote: action.currentNote, loading: false, error: ''})

        case UPDATE_NOTE:
            return Object.assign({}, state, {notes: [ ...state.notes, action.currentNote ], currentNote: action.currentNote, loading: false, error: ''})
            //may need to change for returning single note ID with nested Object.assign
            //for both get note and update note

        case ERROR_MESSAGE:
            return Object.assign({}, state, {error: action.actionMessage, loading: false})

        default:
            return state 
    }
}


//            return Object.assign({}, state, {notes: [ Object.assign( {}, state.notes, action.currentNote ) ], currentNote: action.currentNote, loading: false, error: ''})