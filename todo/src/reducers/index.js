import { FETCHING, GET_TODOS, ERROR, GET_TODO, UPDATE_TODO } from '../actions';

const initialState = {
    notes: [],
    fetching: false,
    error: '',
    currentNote: '',
}

export default ( state = initialState, action ) => {
    switch ( action.type ) {
        case FETCHING:
            return Object.assign( {}, state, {fetching: true });

        case GET_TODO:
            return Object.assign ( {}, state, {currentNote: action.currentNote, fetching: false, error: '' });
            
        case GET_TODOS:
            return Object.assign( {}, state, { notes: action.notes, fetching: false, error: '' });

        case ERROR:
            return Object.assign ( {}, state, { error: action.errorMessage, fetching: false });

        case UPDATE_TODO:
            return Object.assign ( {}, state, {notes: [ ...state.notes, action.currentNote ], currentNote: action.currentNote, fetching: false, error: '' })

        default:
            return state;
    }
}