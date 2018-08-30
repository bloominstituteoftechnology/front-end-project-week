import { FETCH_NOTES, FETCHED, ADD_NOTE, ADDED, EDIT_NOTES, EDITED, ERROR } from '../actions';
export const initialState = {
    fetchingNotes: false,
    creatingNote: false,
    updatingNote: false,
    deletingNote: false,
    notes: [{
        tags: ['tag', 'otherTag'],
        title: 'Note Title',
        content: 'Note Content'
    }],
    error: null
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NOTES:
            return {
                ...state,
                fetchingNotes: true
            }
        case FETCHED:
            return {
                ...state,
                fetchingNotes: false,
                notes: [...action.payload]
            }
        case ADD_NOTE:
            return {
                ...state,
                creatingNote: true,
            }
        case ADDED:
            return {
                ...state,
                creatingNote: false,
                notes: [...action.payload]
            }
        case EDIT_NOTES:
            return {
                ...state,
                updatingNote: true,
            }
        case EDITED:
            return {
                ...state,
                updatingNote: false,
                notes: [...action.payload]
            }
        case ERROR:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};