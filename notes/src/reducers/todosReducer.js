import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    ON_HANDLE_SUBMIT
} from '../actions/actions';

const initialState = {
    // todos: [{
    //     tags: '',
    //     title: '',
    //     textBody: ''
    // }],
    todos: [],
    fetchingTodos: false,
    addingTodos: false,
    error: null
}

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state, 
                fetchingTodos: true,
                addingTodos: false
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                fetchingTodos: false,
                addingTodos: false,
                error: null,
                todos: action.payload
            }
        case FETCH_FAILURE: 
            return {
                ...state,
                fetchingTodos: false,
                error: action.payload
            }
        case ON_HANDLE_SUBMIT: 
            return {
                ...state,
                fetchingTodos: false,
                addingTodos: true,
                error: null
            }
        default:
            return state;
    }
};