/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  FETCHING_NOTES,
  FETCHING_NOTES_SUCCESS,
  FETCHING_NOTES_FAILURE,
  CREATE_NOTE,
  ADDING_NOTE_SUCCESS,
  ADDING_NOTE_FAILURE,
  SHOW_NOTE,
  GO_HOME,
  MIGHT_DELETE_NOTE,
  CANCEL_DELETE_NOTE,
  DELETE_NOTE,
  DELETING_NOTE_SUCCESS,
  DELETING_NOTE_FAILURE,
  EDIT_NOTE,
  EDIT_NOTE_SUCCESS,
  EDIT_NOTE_FAILURE,
  LOGIN
} from '../actions/index';

const initialState = {
  notes: [],
  fetchingNotes: false,
  addingNote: false,
  isActive: false,
  activeNote: null,
  mightDelete: false,
  deletingNote: false,
  editingNote: false,
  error: null,
  id: null
};

/*
  You'll only need one note reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_NOTES:
      return {
        ...state,
        fetchingNotes: true
      };

    case FETCHING_NOTES_SUCCESS:
      return {
        ...state,
        fetchingNotes: false,
        notes: action.payload,
        error: null
      };

    case LOGIN:
      return {
        ...state,
        id: action.payload,
        error: null
      };

    case FETCHING_NOTES_FAILURE:
      return {
        ...state,
        fetchingNotes: false,
        error: action.payload,
        activeNote: null
      };

    case CREATE_NOTE:
      return {
        ...state,
        addingNote: true
      };

    case ADDING_NOTE_SUCCESS:
      return {
        ...state,
        addingNote: false,
        error: null
      };

    case ADDING_NOTE_FAILURE:
      return {
        ...state,
        addingNote: false,
        error: action.payload
      };

    case SHOW_NOTE:
      return {
        ...state,
        isActive: true,
        activeNote: action.payload
      };

    case GO_HOME:
      return {
        ...state,
        activeNote: null,
        editingNote: false
      };

    case MIGHT_DELETE_NOTE:
      return {
        ...state,
        mightDelete: true
      };

    case CANCEL_DELETE_NOTE:
      return {
        ...state,
        mightDelete: false
      };

    case DELETE_NOTE:
      return {
        ...state,
        deletingNote: true,
        mightDelete: false
      };

    case DELETING_NOTE_SUCCESS:
      return {
        ...state,
        deletingNote: false,
        activeNote: null
      };

    case DELETING_NOTE_FAILURE:
      return {
        ...state,
        deletingNote: false,
        activeNote: null
      };

    case EDIT_NOTE:
      return {
        ...state,
        editingNote: true
      };

    case EDIT_NOTE_SUCCESS:
      return {
        ...state,
        editingNote: false,
        activeNote: null
      };

    case EDIT_NOTE_FAILURE:
      return {
        ...state,
        editingNote: false,
        activeNote: null
      };

    default:
      return state;
  }
};
