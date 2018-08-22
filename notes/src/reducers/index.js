import {
    FETCHING_NOTES, 
    NOTES_FETCHED,
    ADDING_NOTE,
    NOTE_ADDED,
    UPDATING_NOTE,
    NOTE_UPDATED,
    DELETING_NOTE,
    NOTE_DELETED,
    SEARCHING,
    ERROR
} from '../actions';

const initialState = {
    notes: [],
    fetchingNotes: false,
    notesFetched: false,
    addingNote: false,
    noteAdded: false,
    updatingNote: false,
    noteUpdated: false,
    deletingNote: false,
    noteDeleted: false,
    searching: false,
    searchText: '',
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_NOTES:
            console.log('fetching notes');
            return Object.assign({}, state, {
                fetchingNotes: true
            })
        case NOTES_FETCHED:
            console.log('notes fetched');
            return Object.assign({}, state, {
                fetchingNotes: false,
                notesFetched: true,
                notes: [...action.payload]
            })
        case ADDING_NOTE:
            console.log('adding note');
            return Object.assign({}, state, {
                addingNote: true
            })
        case NOTE_ADDED:
            console.log('note added');
            return Object.assign({}, state, {
                addingNote: false,
                noteAdded: true
            })
        case UPDATING_NOTE:
            console.log('updating note');
            return Object.assign({}, state, {
                updatingNote: true
            })
        case NOTE_UPDATED:
            console.log('note updated');
            return Object.assign({}, state, {
                updatingNote: false,
                noteUpdated: true
            })
        case DELETING_NOTE:
            console.log('deleting note');
            return Object.assign({}, state, {
                deletingNote: true
            })
        case NOTE_DELETED:
            console.log('note deleted');
            return Object.assign({}, state, {
                deletingNote: false,
                noteDeleted: true
            })
        case SEARCHING:
            console.log('searching');
            return Object.assign({}, state, {
                searching: true,
                searchText: action.payload
            })
        case ERROR:
            console.log('error', action.payload);
            return Object.assign({}, state, {
                error: action.payload
            })
        default:
            return state
    }
}