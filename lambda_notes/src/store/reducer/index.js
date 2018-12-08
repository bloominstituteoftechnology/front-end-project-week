import {
  FETCH_NOTES,
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_FAILURE,
  FETCH_SINGLE_NOTE,
  FETCH_SINGLE_NOTE_SUCCESS,
  FETCH_SINGLE_NOTE_FAILURE,
  ADD_NOTE,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_FAILURE,
  EDIT_NOTE,
  EDIT_NOTE_SUCCESS,
  EDIT_NOTE_FAILURE,
  DELETE_NOTE,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAILURE
} from "../actions";

const initialState = {
  notes: [],
  fetchingNotes: false,
  error: null,
  note: {}
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTES:
      return {
        ...state,
        fetchingNotes: true,
        error: null,
        note: {}
      };
    case FETCH_NOTES_SUCCESS:
      return {
        ...state,
        notes: action.payload,
        fetchingNotes: false,
        error: null,
        note: {}
      };
    case FETCH_NOTES_FAILURE:
      return {
        ...state,
        fetchingNotes: false,
        error: action.payload,
        note: {}
      };
    case FETCH_SINGLE_NOTE:
      return {
        ...state,
        fetchingNotes: true,
        error: null,
        note: {}
      };
    case FETCH_SINGLE_NOTE_SUCCESS:
      return {
        ...state,
        fetchingNotes: false,
        error: null,
        note: action.payload
      };
    case FETCH_SINGLE_NOTE_FAILURE:
      return {
        ...state,
        fetchingNotes: false,
        error: action.payload,
        note: {}
      };
    case ADD_NOTE:
      return {
        ...state,
        fetchingNotes: false,
        error: null,
        note: {}
      };
    case ADD_NOTE_SUCCESS:
      return {
        ...state,
        fetchingNotes: false,
        error: null,
        note: {}
      };
    case ADD_NOTE_FAILURE:
      return {
        ...state,
        fetchingNotes: false,
        error: action.payload,
        note: {}
      };
    case EDIT_NOTE:
      return {
        ...state,
        fetchingNotes: false,
        error: null,
        note: {}
      };
    case EDIT_NOTE_SUCCESS:
      return {
        ...state,
        fetchingNotes: true,
        notes: [...state.notes, { ...action.payload }],
        error: null,
        note: {}
      };
    case EDIT_NOTE_FAILURE:
      return {
        ...state,
        fetchingNotes: false,
        error: action.payload,
        note: {}
      };
    case DELETE_NOTE:
      return {
        ...state,
        fetchingNotes: false,
        error: null,
        note: {}
      };
    case DELETE_NOTE_SUCCESS:
      return {
        ...state,
        fetchingNotes: false,
        error: null,
        note: {}
      };
    case DELETE_NOTE_FAILURE:
      return {
        ...state,
        fetchingNotes: false,
        error: action.payload,
        note: {}
      };
    default:
      return state;
  }
};

export default notesReducer;
