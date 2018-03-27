import {
    FETCHING,
    FETCHED,
    ADDING,
    ADDED,
    ERROR
} from '../actions';

const initState = {
    notes: [],
    isFetching: false,
    loadingMsg: null,
    isFetched: false,
    isAdding: false,
    error: null,
};

export default function fetchReducer(state = initState, action) {
    switch(action.type) {
        case FETCHING:
            return {...state, isFetching: true, loadingMsg: action.msg };
        case FETCHED:
            return {...state, notes: action.notes, isFetched: true, isFetching: false, loadingMsg: null  };
        case ADDING:
            return {...state, isAdding: true }
        case ADDED: 
            return {...state, isAdding: false, notes: action.notes };
        case ERROR:
            return {...state, error: action.errorMessage, loadingMsg: null };
        default:
            return state;
    }
}