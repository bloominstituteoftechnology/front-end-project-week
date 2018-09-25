import * as actionTypes from '../actions';

const initialState = {
  fetchingNotes: false,
  fetchingNote: false,
  fetchedNote: false,
  savingNotes: false,
  updatingNote: false,
  deletingNote: false,
  registeringUser: false,
  loggingInUser: false,
  loggingOutUser: false,
  notes: [],
  note: [],
  error: null
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_NOTES:
      return {
        ...state,
        fetchingNotes: true
      };
    case actionTypes.FETCHED_NOTES:
      return {
        ...state,
        fetchingNotes: false,
        fetchedNote: false,
        notes: action.payload
      };
    case actionTypes.FETCHING_NOTE:
      return {
        ...state,
        fetchingNote: true
      };
    case actionTypes.FETCHED_NOTE:
      return {
        ...state,
        fetchingNote: false,
        fetchedNote: true,
        note: action.payload
      };
    case actionTypes.SAVING_NOTES:
      return {
        ...state,
        savingNotes: true
      };
    case actionTypes.SAVED_NOTES:
      return {
        ...state,
        savingNotes: false
      };
    case actionTypes.UPDATING_NOTES:
      return {
        ...state,
        updatingNote: true
      };
    case actionTypes.UPDATED_NOTES:
      return {
        ...state,
        updatingNote: false,
        note: action.payload
      };
    case actionTypes.DELETING_NOTES:
      return {
        ...state,
        deletingNote: true
      };
    case actionTypes.DELETED_NOTES:
      return {
        ...state,
        deletingNote: false
      };
    case actionTypes.REGISTERING_USER:
      return {
        ...state,
        registeringUser: true
      };
    case actionTypes.REGISTERED_USER:
      return {
        ...state,
        registeringUser: false
      };
    case actionTypes.LOGGING_IN_USER:
      return {
        ...state,
        loggingInUser: true
      };
    case actionTypes.LOGGED_IN_USER:
      return {
        ...state,
        loggingInUser: false
      };
    case actionTypes.LOGGING_OUT_USER:
      return {
        ...state,
        loggingOutUser: true
      };
    case actionTypes.LOGGED_OUT_USER:
      return {
        ...state,
        loggingOutUser: false,
        error: null
      };
    case actionTypes.ERROR:
      return {
        ...state,
        savingNotes: false,
        fetchingNotes: false,
        fetchingNote: false,
        updatingNote: false,
        deletingNote: false,
        registeringUser: false,
        loggingInUser: false,
        loggingOutUser: false,
        error: action.payload
      };
    default:
      return state;
  }
};
