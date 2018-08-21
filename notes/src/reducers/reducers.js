import {FETCHING_NOTES,
        FETCHED_NOTES,
        FETCHING_ONE_NOTE,
        FETCHED_ONE_NOTE,
        ERRORS} from '../actions/actions';

const initialState = {
    notes: [],
    note: [],
    fetchingNotes: false,
    fetchedNotes: false,
    fetchingOneNote: false,
    fetchedOneNote: false,
    addingNote: false,
    addedNote: false,
    updatingNote: false,
    updatedNote: false,
    deletingNote: false,
    deletedNote: false,
    error: null,
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_NOTES:
            return Object.assign({}, state, {
                fetchingNotes: true
            })
        case FETCHED_NOTES:
            return Object.assign({}, state, {
                fetchingNotes: false,
                fetchedNotes: true,
                notes: action.payload
            })
        case FETCHING_ONE_NOTE:
            return Object.assign({}, state, {
                fetchingOneNote: true,
            });
        case FETCHED_ONE_NOTE:
            return Object.assign({}, state, {
                fetchingOneNote: false,
                fetchedOneNote: true,
                note: action.payload,
            });
        case ERRORS:
            return Object.assign({}, state, {
                fetchingNotes: false,
                fetchedNotes: false,
                fetchingOneNote: false,
                fetchedOneNote: false,
                addingNote: false,
                addedNote: false,
                updatingNote: false,
                updatedNote: false,
                deletingNote: false,
                deletedNote: false,
                error: action.payload
            })
        default:
            return state;
    }
}