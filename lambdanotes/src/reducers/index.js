import {
  FETCHING_NOTES,
  FETCHED_NOTES,
  FETCH_NOTES_ERROR,
  FETCH_NOTE,
  FETCHED_NOTE,
  FETCH_NOTE_ERROR,
  NOTE_ADD,
  NOTE_ADDED,
  NOTE_ADD_ERROR,
  DELETE_NOTE,
  DELETED_NOTE,
  DELETE_NOTE_ERROR,
  NOTE_UPDATE,
  NOTE_UPDATED,
  NOTE_UPDATE_ERROR
} from '../actions';

// const initialState = {};
const initialState = {
  notes: [],
  note: { tags: [], title: '', textBody: '' },
  fetching: false,
  error: ''
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_NOTES:
      return { ...state, fetching: true };

    case FETCHED_NOTES:
      return {
        ...state,
        notes: action.payload,
        fetching: false
      };

    case FETCH_NOTES_ERROR:
      return {
        ...state,
        fetching: false,
        error: `${action.payload}`
      };
    case FETCH_NOTE:
      return {
        ...state,
        fetching: true
      };
    case FETCHED_NOTE:
      return {
        ...state,
        note: action.payload,
        fetching: false
      };
    case FETCH_NOTE_ERROR:
      return {
        ...state,
        fetching: false,
        error: `${action.payload}`
      };
    case NOTE_ADD:
      return {
        ...state,
        fetching: true
      };
    case NOTE_ADDED:
      return {
        ...state,
        // notes: action.payload,
        fetching: false
      };
    case NOTE_ADD_ERROR:
      return {
        ...state,
        fetching: false,
        error: `${action.payload}`
      };
    case DELETE_NOTE:
      return {
        ...state,
        fetching: true
      };
    case DELETED_NOTE:
      return {
        ...state,
        note: action.payload,
        fetching: false
      };
    case DELETE_NOTE_ERROR:
      return {
        ...state,
        fetching: false,
        error: `${action.payload}`
      };
    case NOTE_UPDATE:
      return {
        ...state,
        fetching: true
      };
    case NOTE_UPDATED:
      return {
        ...state,
        note: action.payload,
        fetching: false
      };
    case NOTE_UPDATE_ERROR:
      return {
        ...state,
        fetching: false,
        error: `${action.payload}`
      };
    default:
      return state;
  }
};

export default rootReducer;
