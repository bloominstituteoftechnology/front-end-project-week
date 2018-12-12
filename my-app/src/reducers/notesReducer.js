import {
  FETCH_NOTES,
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_FAILURE,
  DELETE_NOTE,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAILURE,
  POST_NOTE,
  POST_NOTE_SUCCESS,
  POST_NOTE_FAILURE,
  PUT_NOTE_SUCCESS,
  PUT_NOTE,
  PUT_NOTE_FAILURE
} from "../actions/index";

const initialState = {
  fetchingNotes: false,
  notesFetched: false,
  notesSaved: false,
  savingNotes: false,
  updatingNote: false,
  noteUpdated: false,
  deletingNote: false,
  noteDeleted: false,
  notes: [],
  error: null,
  note: null
};
export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTES:
      return {
        ...state,
        fetchingNotes: true
      };
    case FETCH_NOTES_SUCCESS:
      return {
        ...state,
        fetchingNotes: false,
        notes: [...action.payload]
      };
    case FETCH_NOTES_FAILURE:
      return {
        ...state,
        fetchingNotes: false,
        error: action.payload
      };
    case DELETE_NOTE:
      return {
        ...state,
        deletingNote: true
      };
    case DELETE_NOTE_SUCCESS:
      return {
        ...state,
        deletingNote: false
        // notes: [...action.payload]
      };
    case DELETE_NOTE_FAILURE:
      return {
        ...state,
        deletingNote: false,
        error: action.payload
      };
    case POST_NOTE:
      return {
        ...state,
        savingNotes: true
      };
    case POST_NOTE_SUCCESS:
      return {
        ...state,
        savingNotes: false
        //notes: [...action.payload]
      };
    case POST_NOTE_FAILURE:
      return {
        ...state,
        savingNotes: false,
        error: action.payload
      };
    case PUT_NOTE:
      return {
        ...state,
        updatingNote: true
      };
    case PUT_NOTE_SUCCESS:
      return {
        ...state,
        updatingNote: false,
        note: [action.payload]
      };
    case PUT_NOTE_FAILURE:
      return {
        ...state,
        updatingNote: false,
        error: action.payload
      };
    default:
      return state;
  }
};
