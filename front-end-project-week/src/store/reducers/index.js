import {
  FETCH_NOTES_LOADING,
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_FAILURE,
  FETCH_NOTE_LOADING,
  FETCH_NOTE_SUCCESS,
  FETCH_NOTE_FAILURE,
  ADD_NOTE_LOADING,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_FAILURE,
  DELETE_NOTE_LOADING,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAILURE,
  EDIT_NOTE_LOADING,
  EDIT_NOTE_SUCCESS,
  EDIT_NOTE_FAILURE
} from '../actions';

const initialState = {
  notes: [],
  note: {},
  fetchingNotes: false,
  fetchingNote: false,
  addingNote: false,
  deletingNote: false,
  editingNote: false,
  error: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // List of Notes
    case FETCH_NOTES_LOADING:
      return {
        ...state,
        fetchingNotes: true,
        fetchingNote: false,
        addingNote: false,
        deletingNote: false,
        editingNote: false
      };
    case FETCH_NOTES_SUCCESS:
      return {
        ...state,
        fetchingNotes: false,
        fetchingNote: false,
        addingNote: false,
        deletingNote: false,
        editingNote: false,
        notes: action.payload
      };
    case FETCH_NOTES_FAILURE:
      return {
        ...state,
        fetchingNotes: false,
        fetchingNote: false,
        addingNote: false,
        deletingNote: false,
        editingNote: false,
        error: action.payload
      };
    // Single Note
    case FETCH_NOTE_LOADING:
      return {
        ...state,
        fetchingNotes: false,
        fetchingNote: true,
        addingNote: false,
        deletingNote: false,
        editingNote: false
      };
    case FETCH_NOTE_SUCCESS:
      return {
        ...state,
        fetchingNotes: false,
        fetchingNote: false,
        addingNote: false,
        deletingNote: false,
        editingNote: false,
        note: action.payload
      };
    case FETCH_NOTE_FAILURE:
      return {
        ...state,
        fetchingNotes: false,
        fetchingNote: false,
        addingNote: false,
        deletingNote: false,
        editingNote: false,
        error: action.payload
      };
    // Create Note
    case ADD_NOTE_LOADING:
      return {
        ...state,
        fetchingNotes: false,
        fetchingNote: false,
        addingNote: true,
        deletingNote: false,
        editingNote: false
      };
    case ADD_NOTE_SUCCESS:
      return {
        ...state,
        fetchingNotes: false,
        fetchingNote: false,
        addingNote: false,
        deletingNote: false,
        editingNote: false
      };
    case ADD_NOTE_FAILURE:
      return {
        ...state,
        fetchingNotes: false,
        fetchingNote: false,
        addingNote: false,
        deletingNote: false,
        editingNote: false,
        error: action.payload
      };
    // Delete Note
    case DELETE_NOTE_LOADING:
      return {
        ...state,
        fetchingNotes: false,
        fetchingNote: false,
        addingNote: false,
        deletingNote: true,
        editingNote: false
      };
    case DELETE_NOTE_SUCCESS:
      return {
        ...state,
        fetchingNotes: false,
        fetchingNote: false,
        addingNote: false,
        deletingNote: false,
        editingNote: false
      };
    case DELETE_NOTE_FAILURE:
      return {
        ...state,
        fetchingNotes: false,
        fetchingNote: false,
        addingNote: false,
        deletingNote: false,
        editingNote: false,
        error: action.payload
      };
    // Edit Note
    case EDIT_NOTE_LOADING:
      return {
        ...state,
        fetchingNotes: false,
        fetchingNote: false,
        addingNote: false,
        deletingNote: false,
        editingNote: true
      };
    case EDIT_NOTE_SUCCESS:
      return {
        ...state,
        fetchingNotes: false,
        fetchingNote: false,
        addingNote: false,
        deletingNote: false,
        editingNote: false
      };
    case EDIT_NOTE_FAILURE:
      return {
        ...state,
        fetchingNotes: false,
        fetchingNote: false,
        addingNote: false,
        deletingNote: false,
        editingNote: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
