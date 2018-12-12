import {
  FETCHING_NOTES_START,
  FETCHING_NOTES_SUCCESS,
  FETCHING_NOTES_FAILURE,
  ADD_NOTE_START,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_FAILURE,
  EDIT_NOTE_START,
  EDIT_NOTE_SUCCESS,
  EDIT_NOTE_FAILURE,
  DELETE_NOTE_START,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAILURE
} from "../Actions";

const initialState = {
  notes: [],
  fetchingNotes: false,
  addingNote: false,
  editingNote: false,
  deletingNote: false,
  error: null
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_NOTES_START:
      return {
        ...state,
        fetchingNotes: true
      };
    case FETCHING_NOTES_SUCCESS:
      return {
        ...state,
        error: null,
        fetchingNotes: false,
        notes: action.payload
      };
    case FETCHING_NOTES_FAILURE:
      return {
        ...state,
        fetchingNotes: false,
        error: action.payload
      };
    case ADD_NOTE_START:
      return {
        ...state,
        addingNote: true
      };
    case ADD_NOTE_SUCCESS:
      return {
        ...state,
        addingNote: false,
        error: null,
        notes: [...state.notes, action.payload]
      };
    case ADD_NOTE_FAILURE:
      return {
        ...state,
        addingNote: false,
        error: action.payload
      };
    case EDIT_NOTE_START:
      return {
        ...state,
        editingNote: true
      };
    case EDIT_NOTE_SUCCESS:
      return {
        ...state,
        editingNote: false,
        notes: state.notes.map(note =>
          note._id === action.payload._id ? action.payload : note
        ),
        error: null
      };
    case EDIT_NOTE_FAILURE:
      return {
        ...state,
        editingNote: false,
        error: action.payload
      };
    case DELETE_NOTE_START:
      return {
        ...state,
        deletingNote: true
      };
    case DELETE_NOTE_SUCCESS:
      return {
        ...state,
        deletingNote: false,
        notes: state.notes.filter(note => note._id !== action.payload),
        error: null
      };
    case DELETE_NOTE_FAILURE:
      return {
        ...state,
        deletingNote: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducers;
