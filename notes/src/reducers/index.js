import {
  FETCH_NOTES_START,
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_FAILURE,
  FETCH_NOTES_BY_SORT_START,
  FETCH_NOTES_BY_SORT_SUCCESS,
  FETCH_NOTES_BY_SORT_FAILURE,
  FETCH_NOTES_BY_ID_START,
  FETCH_NOTES_BY_ID_SUCCESS,
  FETCH_NOTES_BY_ID_FAILURE,
  ADD_NOTE_START,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_FAILURE,
  DELETE_NOTE_START,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAILURE,
  EDIT_NOTE_START,
  EDIT_NOTE_SUCCESS,
  EDIT_NOTE_FAILURE
} from "../actions";

const initialState = {
  notes: [],
  note: {},
  fetching: false,
  error: null
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTES_START:
      return {
        ...state,
        fetching: true
      };
    case FETCH_NOTES_SUCCESS:
      return {
        ...state,
        error: null,
        fetching: false,
        notes: action.payload
      };
    case FETCH_NOTES_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case FETCH_NOTES_BY_SORT_START:
      return {
        ...state,
        fetching: true
      };
    case FETCH_NOTES_BY_SORT_SUCCESS:
      return {
        ...state,
        error: null,
        fetching: false,
        notes: action.payload
      };
    case FETCH_NOTES_BY_SORT_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case FETCH_NOTES_BY_ID_START:
      return {
        ...state,
        fetching: true
      };
    case FETCH_NOTES_BY_ID_SUCCESS:
      return {
        ...state,
        error: null,
        fetching: false,
        note: action.payload
      };
    case FETCH_NOTES_BY_ID_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case ADD_NOTE_START:
      return {
        ...state,
        fetching: true
      };
    case ADD_NOTE_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: false
      };
    case ADD_NOTE_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case DELETE_NOTE_START:
      return {
        ...state,
        fetching: true
      };
    case DELETE_NOTE_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: false
      };
    case DELETE_NOTE_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case EDIT_NOTE_START:
      return {
        ...state,
        fetching: true
      };
    case EDIT_NOTE_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: false
      };
    case EDIT_NOTE_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default notesReducer;
