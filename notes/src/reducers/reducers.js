import {FETCHING_NOTES,
        FETCHED_NOTES,
        ERRORS} from '../actions/actions';

const initialState = {
    notes: [],
    fetchingNotes: false,
    fetchedNotes: false,
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
        case ERRORS:
            return Object.assign({}, state, {
                fetchingNotes: false,
                fetchedNotes: false,
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