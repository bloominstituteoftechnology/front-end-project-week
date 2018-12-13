import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE,
    ON_HANDLE_SUBMIT,
    UPDATE_TODOS,
    DELETE_TODOS,
    FILTER_TODOS,
    SORT_TODOS,
    EXPORT_TODOS
} from '../actions/actions';

const initialState = {
    todos: [],
    fetchingTodos: false,
    addingTodos: false,
    updatingTodos: false,
    deletingTodos: false,
    filteringTodos: false,
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
                filteringTodos: false,
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
        // console.log('handle submit action payload...',  action.payload)
            return {
                ...state,
                fetchingTodos: false,
                addingTodos: true,
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
                deletingTodos: true,
            }
        case FILTER_TODOS:
            return {
                ...state,
                filteringTodos: true
            }
        case SORT_TODOS: 
            return {
                ...state
            }
        case EXPORT_TODOS:
            return {
                ...state
            }
        default:
            return state;
    }
};