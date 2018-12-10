import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    ON_HANDLE_SUBMIT,
    UPDATE_TODOS,
    DELETE_TODOS
} from '../actions/actions';

const initialState = {
    // todos: [{
    //     tags: [],
    //     title: '',
    //     textBody: ''
    // }],
    todos: [],
    fetchingTodos: false,
    addingTodos: false,
    updatingTodos: false,
    deletingTodos: false,
    error: null
}

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state, 
                fetchingTodos: true,
                addingTodos: false,
                updatingTodos: false,
                deletingTodos: false
            }
        case FETCH_SUCCESS:
            // console.log('fetch success', action.payload)
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
        console.log('handle submit action payload...',  action.payload)
            return {
                ...state,
                fetchingTodos: false,
                addingTodos: true,
                // todos: action.payload,
                error: null
            }
        case UPDATE_TODOS:
            return {
                ...state,
                fetchingTodos: false,
                updatingTodos: true,
                deletingTodos: false
            }
        case DELETE_TODOS:
            return {
                ...state,
                fetchingTodos: false,
                updatingTodos: false,
                deletingTodos: true
            }
        default:
            return state;
    }
};