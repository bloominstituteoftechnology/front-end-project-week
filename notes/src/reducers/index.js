import {FETCHING, FETCHED, POSTING, POSTED, EDITING, EDITED, DELETING, DELETED, ERROR} from '../actions/index';

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
    noteEdited: false
//     notes: [
//         {
//             title: 'Test Note',
//             content: 'This is a test note. It is meant for display and testing purposes.',
//             id: 0,
//         },
//         {
//             title: 'Test Note #2',
//             content: 'This is another test note. You can see this test note now.',
//             id: 1,
//         },
// ],
//     currentID: 2
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
                notes: action.payload
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
            return Object.assign({}, state, {
                deletingNote: false, noteDeleted: true
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


        default:
            return state;
    }
}