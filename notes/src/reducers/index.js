import {FETCHING, FETCHED, POSTING, POSTED, FETCHING_SINGLE, FETCHED_SINGLE, EDITING, EDITED, DELETING, DELETED, ERROR} from '../actions/index';

const initialState = {
    fetchingNotes: false,
    notesFetched: false,
    postingNote: false,
    notePosted: false,
    error: null,
    notes: [],
    deletingNote: false,
    noteDeleted: false,
    editingNote: false,
    noteEdited: false,
    fetchingSingle: false,
    singleFetched: false,
    currentNote: {}
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCHING:
            return Object.assign({}, state, {
                fetchingNotes: true
            })

        case FETCHED:
            return Object.assign({}, state, {
                fetchingNotes: false, 
                notesFetched: true,
                notes: action.payload,
                currentNote: {},
                singleFetched: false
            })

        case POSTING:
            return Object.assign({}, state, {
                postingNote: true
            })

        case POSTED:
            let newNotes = state.notes.map(note => {
                return note;
            });

            return Object.assign({}, state, {
                notePosted: true, 
                postingNote: false, 
                notes: newNotes
            })

        case DELETING:
            return Object.assign({}, state, {
                deletingNote: true
            })

        case DELETED:
            let afterNotes = state.notes.map(note => {
                return note;
            });
            return Object.assign({}, state, {
                deletingNote: false, noteDeleted: true, notes: afterNotes
            })

        case ERROR:
            return Object.assign({}, state, {
                error: "Operation failed."
            })
        
        case EDITING:
            return Object.assign({}, state, {
                editingNote: true
            })

        case EDITED:
            let updatedNotes = state.notes.map(note => {
                return note;
            });
            return Object.assign({}, state, {
                editingNote: false, 
                noteEdited: true,
                notes: updatedNotes
            })

        case FETCHING_SINGLE:
            return Object.assign({}, state, {
                fetchingSingle: true
            })

        case FETCHED_SINGLE:
            return Object.assign({}, state, {
                fetchingSingle: false,
                singleFetched: true,
                currentNote: action.payload
            })

        default:
            return state;
    }
}