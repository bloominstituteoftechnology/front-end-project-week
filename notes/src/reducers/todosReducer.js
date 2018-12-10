import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE
} from '../actions/actions';

const initialState = {
    todos: [{
        tags: '',
        title: '',
        textBody: ''
    }],
    fetchingtodos: false,
    error: null
}

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state, 
                fetchingtodos: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                fetchingtodos: false,
                error: null,
                todos: action.payload
            }
        case FETCH_FAILURE: 
            return {
                ...state,
                fetchingtodos: false,
                error: action.payload
            }
        default:
            return state;
    }
};