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
    currentNote: null
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
                pending: false,
                singleNote: false,
                error: false,
                notes: action.payload
            })
        case CREATED:
            return Object.assign({}, state, {
                pending: false,
                created: true,
                error: false,
                notes: action.payload
            })
        case UPDATED:
            return Object.assign({}, state, {
                pending: false,
                updated: true,
                error: false,
                notes: action.payload
            })
        case DELETED:
            return Object.assign({}, state, {
                pending: false,
                deleted: true,
                error: false,
                notes: action.payload
            })
        case SINGLE_NOTE: 
            return Object.assign({}, state, {
                pending: false,
                singleNote: true,
                error: false,
                currentNote: action.payload
            })
        case ERROR:
            return Object.assign({}, state, {
                pending: false,
                success: false,
                error: true
            })
        default:
            return state;
    }
}