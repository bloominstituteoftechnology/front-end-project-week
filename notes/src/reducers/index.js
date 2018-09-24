import {FETCHING, FETCHED, POSTING, POSTED, ERROR} from '../actions/index';

const initialState = {
    fetchingNotes: false,
    notesFetched: false,
    postingNote: false,
    notePosted: false,
    error: null,
    notes: [
        {
            title: 'Test Note',
            content: 'This is a test note. It is meant for display and testing purposes.',
            id: 0,
        },
        {
            title: 'Test Note #2',
            content: 'This is another test note. You can see this test note now.',
            id: 1,
        }
],
    currentID: 2
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {


        case POSTED:
            let newNotes = state.notes.map(note => {
                return note;
            });

            newNotes.push(action.payload);

            return Object.assign({}, state, {
                notePosted: true, postingNote: false, notes: newNotes
            })

        

        default:
            return state;
    }
}