import {
    FETCHING_NOTES,
    NOTES_FETCHED,
    FETCHING_NOTE,
    NOTE_FETCHED,
    ADDING,
    ADDED,
    UPDATING,
    UPDATED,
    DELETING,
    DELETED,
    ERROR
} from '../actions';

const initState = {
    notes: [],
    note: {},
    isFetching: false,
    loadingMsg: null,
    isFetched: false,
    isAdding: false,
    isDeleting: false,
    isUpdating: false,
    error: null,
};

export default function fetchReducer(state = initState, action) {
    switch(action.type) {
        case FETCHING_NOTES:
            return {...state, isFetching: true, loadingMsg: action.msg };
        case NOTES_FETCHED:
            return {...state, notes: action.notes, isFetched: true, isFetching: false, loadingMsg: null  };
        case FETCHING_NOTE:
            return {...state, isFetching: true, loadingMsg: action.msg };
        case NOTE_FETCHED:
            return {...state, note: action.note, isFetched: true, isFetching: false, loadingMsg: null  };
        case ADDING:
            return {...state, isAdding: true }
        case ADDED: 
            return {...state, isAdding: false, notes: action.notes };
        case UPDATING:
            return {...state, isUpdating: true }
        case UPDATED: 
            return {...state, isUpdating: false, notes: action.notes };
        case DELETING:
            return {...state, isDeleting: true }
        case DELETED: 
            return {...state, isDeleting: false, notes: action.notes };
        case ERROR:
            return {...state, error: action.errorMessage, loadingMsg: null };
        default:
            return state;
    }
}