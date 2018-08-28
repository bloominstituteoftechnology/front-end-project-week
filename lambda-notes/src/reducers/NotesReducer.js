import { FETCH_NOTES, FETCHED, ADD_NOTE, ADDED, ERROR } from '../actions';
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
        case ERROR:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }
};