import { 
    NOTE_FETCH_IN_PROGRESS,
    NOTE_FETCH_SUCCESS,
    NOTE_FETCH_FAILURE,
    NOTES_FETCH_IN_PROGRESS, 
    NOTES_FETCH_SUCCESS, 
    NOTES_FETCH_FAILURE,
    NOTES_CREATE_IN_PROGRESS,
    NOTES_CREATE_SUCCESS,
    NOTES_CREATE_FAILURE,
    NOTES_SET_EDIT_IN_PROGRESS,
    NOTES_EDIT_IN_PROGRESS,
    NOTES_EDIT_SUCCESS,
    NOTES_EDIT_FAILURE,
    NOTES_REMOVE_IN_PROGRESS,
    NOTES_REMOVE_SUCCESS,
    NOTES_REMOVE_FAILURE,
} from '../actions';

const initialState = {
    notes_fetching: false,
    notes_fetched: false,
    notes_creating: false,
    notes_created: false,
    notes_editing: false,
    notes_edited: false,
    notes_removing: false,
    notes_removed: false,
    notes_array: [],
    note: {},
    note_to_be_updated: null,
    err: null
};

export const notesReducer = (state = initialState, action) => {
    switch(action.type) {
        case NOTE_FETCH_IN_PROGRESS:
            return { ...state, notes_fetching: true };
        case NOTE_FETCH_SUCCESS:
            return { ...state, notes_fetching: false, notes_fetched: true, note: action.payload };
        case NOTE_FETCH_FAILURE:
            return { ...state, notes_fetching: false, err: action.payload };
        case NOTES_FETCH_IN_PROGRESS:
            return { ...state, notes_fetching: true };
        case NOTES_FETCH_SUCCESS:
            return { ...state, notes_fetching: false, notes_fetched: true, notes_array: action.payload };
        case NOTES_FETCH_FAILURE:
            return { ...state, notes_fetching: false, err: action.payload };
        case NOTES_CREATE_IN_PROGRESS:
            return { ...state, notes_creating: true };
        case NOTES_CREATE_SUCCESS:
            return { ...state, notes_creating: false, notes_created: true };
        case NOTES_CREATE_FAILURE:
            return { ...state, notes_creating: false, err: action.payload };
        case NOTES_SET_EDIT_IN_PROGRESS:
            const note = state.notes_array.find(note => note.id === action.payload);
            return { ...state, note_to_be_updated: note ? note : null };
        case NOTES_EDIT_IN_PROGRESS:
            return { ...state, notes_editing: true };
        case NOTES_EDIT_SUCCESS:
            return { ...state, notes_editing: false, notes_edited: true };
        case NOTES_EDIT_FAILURE:
            return { ...state, notes_editing: false, err: action.payload };
        case NOTES_REMOVE_IN_PROGRESS:
            return { ...state, notes_removing: true };
        case NOTES_REMOVE_SUCCESS:
            return { ...state, notes_removing: false, notes_removed: true };
        case NOTES_REMOVE_FAILURE:
            return { ...state, notes_removing: false, err: action.payload };
        default:
            return state;
    }
}