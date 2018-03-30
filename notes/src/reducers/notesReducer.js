import {
    FETCHING_NOTES,
    NOTES_FETCHED,
    FETCHING_NOTES_ERROR,
    FETCHING_NOTE,
    NOTE_FETCHED,
    ADDING_NOTE,
    NOTE_ADDED,
    UPDATING_NOTE,
    NOTE_UPDATED,
    DELETING_NOTE,
    NOTE_DELETED,
    FETCHING_NOTE_ERROR,
    ADDING_NOTE_ERROR,
    UPDATING_NOTE_ERROR,
    DELETING_NOTE_ERROR,
} from '../actions/notesActions';

const initState = {
    notes: [],
    isFetchingNotes: false,
    loadingNotesMsg: null,
    isNotesFetched: false,
    notes_error: null,
    note: {},
    isFetchingNote: false,
    isNoteFetched: false,
    loadingNoteMsg: null,
    isAddingNote: false,
    iseletingNote: false,
    isUpdatingNote: false,
    error: null,
};

export default function fetchReducer(state = initState, action) {
    switch(action.type) {
        case FETCHING_NOTES:
            return {...state, isFetchingNotes: true, loadingNotesMsg: action.msg };
        case NOTES_FETCHED:
            return {...state, notes: action.notes, isNotesFetched: true, isFetchingNotes: false, loadingNotesMsg: null  };
        case FETCHING_NOTE:
            return {...state, isFetchingNote: true, loadingNoteMsg: action.msg };
        case NOTE_FETCHED:
            return {...state, note: action.note, isNoteFetched: true, isFetchingNote: false, loadingNoteMsg: null  };
        case ADDING_NOTE:
            return {...state, isAddingNote: true }
        case NOTE_ADDED: 
            return {...state, isAddingNote: false, notes: action.notes};
        case UPDATING_NOTE:
            return {...state, isUpdatingNote: true }
        case NOTE_UPDATED: 
            return {...state, isUpdatingNote: false, notes: action.notes};
        case DELETING_NOTE:
            return {...state, isDeletingNote: true }
        case NOTE_DELETED: 
            return {...state, isDeletingNote: false , notes: action.notes};
        case FETCHING_NOTES_ERROR || FETCHING_NOTE_ERROR || ADDING_NOTE_ERROR || UPDATING_NOTE_ERROR || DELETING_NOTE_ERROR:
            return {...state, error: action.errorMessage, loadingNoteMsg: null };
        default:
            return state;
    }
}
