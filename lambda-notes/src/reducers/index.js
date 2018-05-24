import { PENDING, FETCHED, CREATED, UPDATED, DELETED, SINGLE_NOTE, ERROR } from '../actions';

const initialState = {
    pending: false,
    fetched: false,
    created: false,
    updated: false,
    deleted: false,
    singleNote: false, 
    error: false, 
    notes: [],
    currentNote: null,
}

export default (state=initialState, action) => {
    switch(action.type) {
        case PENDING:
            return Object.assign({}, state, {
                pending: true,
                fetched: false,
                created: false,
                updated: false,
                deleted: false,
                error: false,
            })
        case FETCHED:
            return Object.assign({}, state, {
                notes: action.payload,
                pending: false,
                error: false,
                fetched: true
            })
        case CREATED:
            return Object.assign({}, state, {
                notes: action.payload,
                pending: false,
                error: false,
                created: true,
            })
        case UPDATED:
            return Object.assign({}, state, {
                notes: action.payload,
                pending: false,
                error: false,
                updated: true,
            })
        case DELETED:
            return Object.assign({}, state, {
                notes: action.payload,
                pending: false,
                error: false,
                deleted: true
            })
        case SINGLE_NOTE: 
            return Object.assign({}, state, {
                currentNote: action.payload,
                pending: false,
                error: false,
                singleNote: true,
            })
        case ERROR:
            return Object.assign({}, state, {
                pending: false,
                fetched: false,
                created: false,
                updated: false,
                deleted: false,
                error: true
            })
        default:
            return state;
    }
}