import {
  FETCHING_NOTES,
  NOTES_FETCHED,
  FETCHING_NOTE,
  NOTE_FETCHED,
  ADDING_NOTE,
  NOTE_ADDED,
  UPDATING_NOTE,
  NOTE_UPDATED,
  DELETING_NOTE,
  NOTE_DELETED,
  ERROR
} from '../actions/ActionTypes';

const initialState = {
  notes: [],
  error: null,
  fetchingNotes: false,
  fetchingNote: false,
  addingNote: false,
  updatingNote: false,
  deletingNote: false
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_NOTES:
      return Object.assign({}, state, {
        error: null,
        fetchingNotes: true
      });

    case NOTES_FETCHED:
      return Object.assign({}, state, {
        error: null,
        fetchingNotes: false,
        notes: state.notes.concat(action.payload)
      });

    case FETCHING_NOTE:
      return Object.assign({}, state, {
        error: null,
        fetchingNote: true
      });

    case NOTE_FETCHED:
      return Object.assign({}, state, {
        error: null,
        fetchingNote: false,
        notes: action.payload
      });

    case ADDING_NOTE:
      return Object.assign({}, state, {
        error: null,
        addingNote: true
      });

    case NOTE_ADDED:
      return Object.assign({}, state, {
        error: null,
        addingNote: false,
        notes: action.payload
      });
    
    case UPDATING_NOTE:
      return Object.assign({}, state, {
        error: null,
        updatingNote: true
      });

    case NOTE_UPDATED:
      return Object.assign({}, state, {
        error: null,
        updatingNote: false,
        notes: action.payload
      });

    case DELETING_NOTE:
      return Object.assign({}, state, {
        error: null,
        deletingNote: true
      });
    
    case NOTE_DELETED:
      return Object.assign({}, state, {
        error: null,
        deletingNote: false,
        notes: action.payload
      });

    case ERROR:
      return Object.assign({}, state, {
        error: action.payload,
        fetchingNotes: false,
        fetchingNote: false,
        addingNote: false,
        updatingNote: false,
        deletingNote: false
      });

    default:
      return state;
  }
};