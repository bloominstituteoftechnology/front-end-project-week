import {FETCHING, FETCHED, SAVING, SAVED, ERROR, FETCHING_NOTE, FETCHED_NOTE, DELETING, DELETED, UPDATING, UPDATED} from '../actions';

const initialState = {
    notes: [],
    note: [],
    fetching: false,
    fetched: false,
    saving: false,
    saved: false,
    error: null,
    // single note
    fetchingNote: false,
    noteFetched: false,
    // delete and update
    deleting: false,
    deleted: false,
    updating: false,
    updated: false
}

export const notesReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case FETCHING:
        return {...state, fetching: true};
        case FETCHED:
        return{...state, fetched: true, fetching: false, notes: action.payload};
        case SAVING:
        return {...state, saving: true};
        case SAVED:
        return{...state, saving: false, saved: true, note: action.payload};
        case ERROR:
        return {...state, fetching: false, saving: false, error: action.payload};
        case FETCHING_NOTE:
        return {...state,fetchingNote: true, fetched: true}
        case FETCHED_NOTE:
        return {...state, noteFetched: true, fetchingNote: false, note: action.payload}
        case DELETING:
        return {...state, deleting: true}
        case DELETED:
        return {...state, deleting: false}
        case UPDATING:
        return {...state,updating: true}
        case UPDATED:
        return {...state, updated: true,updating: false, note: action.payload}       
        default:
        return state;
    }
}