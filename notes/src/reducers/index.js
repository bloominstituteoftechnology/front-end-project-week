import {FETCHING, FETCHED, POSTING, POSTED, ERROR} from '../actions/index';

const initialState = {
    fetchingNotes: false,
    notesFetched: false,
    postingNote: false,
    notePosted: false,
    error: null,
    notes: [],
    deletingNote: false,
    noteDeleted: false,
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
                notePosted: true, postingNote: false, notes: newNotes
            })

        case ERROR:
            return Object.assign({}, state, {
                error: "Operation failed."
            })
        

        default:
            return state;
    }
}