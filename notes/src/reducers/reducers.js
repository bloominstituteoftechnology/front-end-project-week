import 
    {
    FETCHING_NOTE,
    FETCHED_NOTE,
    ERRORS,
    } from '../actions/actions';

const initialState = {
    notes: [],
    gettingNotes: false,
    gotNotes: false,
    addingNote: false,
    addedNote: false,
    updatingNote: false,
    updatedNote: false,
    deletingNote: false,
    deletedNote: false,
    error: null,
}