import {
    FETCHING,
    FETCHED,
    ADDED,
    ADDING,
    ERROR,
    DELETING,
    DELETED,
    UPDATED,
    UPDATING,
} from '../actions';

const initState = {
    notes: [],
    isFetching: false,
    loadingMsg: null,
    isFetched: false,
    isAdding: false,
    isUpdating: false,
    isDeleting: false,
    error: null,
};

export default function fetchReducer(state = initState, action) {
    switch(action.type) {
        case FETCHING:
            return { ...state, isFetching: true, loadingMsg: action.msg };
        case FETCHED:
            return { ...state, notes: action.notes, isFetched: true, isFetching: false, loadingMsg: null  };
        case ADDING:
            return { ...state, isAdding: true }
        case ADDED: 
            return { ...state, isAdding: false, notes: action.notes };
        case DELETING:
            return { ...state, isDeleting: true }
        case DELETED: 
            return { ...state, notes: action.notes, isDeleting: false };
        case UPDATING:
            return { ...state, isUpdating: true};
        case UPDATED:
            return { ...state, notes: action.notes, isUpdating: false };
        case ERROR:
            return { ...state, error: action.errorMessage, loadingMsg: null };
        default:
            return state;
    }
}

