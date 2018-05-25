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
            })
        case CREATED:
            return Object.assign({}, state, {
                notes: action.payload,
                pending: false,
                created: true,
                error: false,
            })
        case UPDATED:
            return Object.assign({}, state, {
                notes: action.payload,
                pending: false,
                updated: true,
                error: false,
            })
        case DELETED:
            return Object.assign({}, state, {
                notes: action.payload,
                pending: false,
                deleted: true,
                error: false,
            })
        case SINGLE_NOTE: 
            return Object.assign({}, state, {
                currentNote: action.payload,
                pending: false,
                singleNote: true,
                error: false,
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