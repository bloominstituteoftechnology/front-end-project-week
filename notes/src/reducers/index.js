import { FETCHING, FETCHED, ADDING, ADDED, ERROR } from '../actions';
const initialState = {
    notes: [],
    fetchingNotes: false,
    addingNote: false,
    updatingNote: false,
    deletingNote: false,
    error: null
};

export default function (state = initialState, action) {
    switch(action.type) {
        case FETCHING:
        return {...state, fetchingNotes: true};
        case FETCHED:
        return {...state, notes: [...action.payload], fetchingNotes: false};
        default:
        return state;
    }
}