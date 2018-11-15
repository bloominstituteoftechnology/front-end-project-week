import { FETCHING, GOT_TODOS, ERROR } from '../actions';

const initialState = {
    toDos: [],
    fetching: false,
    error: '',
}

export default ( state = initialState, action ) => {
    switch ( action.type ) {
        case FETCHING:
            return Object.assign( {}, state, {fetching: true });

        case GOT_TODOS:
            return Object.assign( {}, state, { toDos: action.toDos, fetching: false, error: '' });

        case ERROR:
            return Object.assign ( {}, state, { error: action.errorMessage, fetching: false });

        default:
            return state;
    }
}