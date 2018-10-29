import {FETCHING, FETCHED, SAVING, SAVED, ERROR} from '../actions';

const initialState = {
    notes: [],
    fetching: false,
    fetched: false,
    saving: false,
    saved: false,
    error: null
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
        return{...state, saving: false, saved: true, notes: action.payload};
        case ERROR:
        return {...state, fetching: false, saving: false, error: action.payload};
        default:
        return state;

    }

}