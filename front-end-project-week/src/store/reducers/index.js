import {
  FETCH_NOTES_LOADING,
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_FAILURE,
  FETCH_NOTE_LOADING,
  FETCH_NOTE_SUCCESS,
  FETCH_NOTE_FAILURE
} from '../actions';

const initialState = {
  notes: [],
  fetchingNotes: false,
  fetchingNote: false,
  addingNote: false,
  deletingNote: false,
  editingNote: false,
  error: null
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case FETCH_NOTE_LOADING:
      return {
        ...state,
        fetchingNotes: true,
        fetchingNote: false,
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
    default:
      return state;
  }
};

export default notesReducer;
