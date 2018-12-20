import {
    FETCHING_NOTES,
    FETCHED_NOTES,
    ERROR_FETCHING_NOTES,
    ADDING_NEW_NOTE,
    NEW_NOTE_ADDED,
    ERROR_ADDING_NEW_NOTE,
    DELETING_NOTE,
    DELETED_NOTE,
    ERROR_DELETING_NOTE,
    UPDATING_NOTE,
    UPDATED_NOTE,
    ERROR_UPDATING_NOTE,
    SET_UPDATE_NOTE
} from '../actions';

const initialState = {
    notes: [],
    gettingNotes: false,
    addedNewNote: false,
    isUpdatingNote: false,
    isDeletingNote: false,
    error: null,
    noteToUpdate: null,
};

export const notesReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_NOTES:
            return Object.assign({}, state, {gettingNotes: true,});
        case FETCHED_NOTES:
            return Object.assign({}, state, {gettingNotes: false, notes: action.payload,});
        case ERROR_FETCHING_NOTES:
            console.log("Error reducer error grabbing notes", action.payload)
            return Object.assign({}, state, {gettingNotes: false, error: action.payload,});
        case ADDING_NEW_NOTE:
            return Object.assign({}, state, {addedNewNote: true,});
        case NEW_NOTE_ADDED:
            return Object.assign({}, state, {addedNewNote: false, notes: action.payload,});
        case ERROR_ADDING_NEW_NOTE:
            console.log("Error reducer error adding new notes", action.payload)
            return Object.assign({}, state, {addedNewNotes: false, error: action.payload,});
        case DELETING_NOTE:
            return Object.assign({}, state, {isDeletingNote: true,});
        case DELETED_NOTE:
            return Object.assign({}, state, {isDeletingNote: false, notes: action.payload,});
        case ERROR_DELETING_NOTE:
            console.log("Error reducer error deleting note", action.payload);
            return Object.assign({}, state, {isDeletingNote: false, error: action.payload});
        case UPDATING_NOTE:
            return Object.assign({}, state, {isUpdatingNote: true,});
        case UPDATED_NOTE:
            return Object.assign({}, state, {isUpdatingNote: false, note: action.payload,});
        case ERROR_UPDATING_NOTE:
            console.log("Error reducer error updating note", action.payload)
            return Object.assign({}, state, {isUpdatingNote: false, error: action.payload,});
        case SET_UPDATE_NOTE:
            const note = state.notes.find(note => note.id === action.payload);
            return {...state, noteToUpdate: note ? note: null }
        default:
            return state;
    }
}