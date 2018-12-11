import {
  GETTING_NOTES,
  GOT_NOTES,
  GET_NOTES_ERROR,
  GETTING_NOTE,
  GOT_NOTE,
  GET_NOTE_ERROR,
  ADDING_NOTE,
  ADDED_NOTE,
  ADD_NOTE_ERROR,
  DELETING_NOTE,
  DELETED_NOTE,
  DELETE_NOTE_ERROR,
  UPDATING_NOTE,
  UPDATED_NOTE,
  UPDATE_NOTE_ERROR,
  SET_REDIRECT,
  RESET_REDIRECT
} from "../actions";

const initialState = {
  notes: [],
  note: {},
  gettingNotes: false,
  gettingNote: false,
  addingNote: false,
  deletingNote: false,
  updatingNote: false,
  error: null,
  redirect: null
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_NOTES:
      return { ...state, gettingNotes: true };

    case GOT_NOTES:
      return {
        ...state,
        notes: action.payload,
        gettingNotes: false
      };

    case GET_NOTES_ERROR:
      return {
        ...state,
        gettingNotes: false,
        error: `${action.payload}`
      };

    case GETTING_NOTE:
      return { ...state, gettingNote: true };

    case GOT_NOTE:
      return {
        ...state,
        note: action.payload,
        gettingNote: false
      };

    case GET_NOTE_ERROR:
      return {
        ...state,
        gettingNote: false,
        error: `${action.payload}`
      };

    case ADDING_NOTE:
      return { ...state, addingNote: true };

    case ADDED_NOTE:
      return {
        ...state,
        addingNote: false
      };

    case ADD_NOTE_ERROR:
      return {
        ...state,
        addingNote: false,
        error: `${action.payload}`
      };

    case DELETING_NOTE:
      return { ...state, deletingNote: true };

    case DELETED_NOTE:
      return {
        ...state,
        note: action.payload,
        deletingNote: false
      };

    case DELETE_NOTE_ERROR:
      return {
        ...state,
        deletingNote: false,
        error: `${action.payload}`
      };

    case UPDATING_NOTE:
      return { ...state, updatingNote: true };

    case UPDATED_NOTE:
      return {
        ...state,
        note: action.payload,
        updatingNote: false
      };

    case UPDATE_NOTE_ERROR:
      return {
        ...state,
        updatingNote: false,
        error: `${action.payload}`
      };

    case SET_REDIRECT:
      return { ...state, redirect: action.payload };

    case RESET_REDIRECT:
      return { ...state, redirect: null };

    default:
      return state;
  }
};

export default noteReducer;
