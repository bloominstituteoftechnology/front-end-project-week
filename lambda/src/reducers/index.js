import {
  FETCHING_NOTES,
  FETCHED_NOTES,
  ADDING_NOTES,
  ADDED_NOTES,
  ERROR,
  FETCHING_NOTE,
  FETCHED_NOTE,
  UPDATING_NOTES,
  UPDATED_NOTES
} from '../actions';

const initialState = {
  notes: [],
  fetchingNotes: true,
  addingNotes: false,
  addedNotes: true,
  err: null,
  fetchingNote: true,
  fetchedNote: {}
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_NOTES:
      return {
        ...state,
        fetchingNotes: true
      };
    case FETCHED_NOTES:
      return {
        ...state,
        fetchingNotes: false,
        notes: action.payload
      };
    case ADDING_NOTES:
      return {
        ...state,
        addingNotes: true
      };
    case ADDED_NOTES:
      return {
        ...state,
        addingNotes: false,
        addedNotes: true,
        notes: state.notes.push(action.payload)
      };
    case FETCHING_NOTE:
      return {
        ...state,
        fetchingNote: true
      };
    case FETCHED_NOTE:
      return {
        ...state,
        fetchedNote: action.payload,
        fetchingNote: false
      };
    case UPDATING_NOTES:
      return {
        ...state
      };
    case UPDATED_NOTES:
      return {
        ...state
      };
    case ERROR:
      return {
        ...state,
        err: action.err
      };
    default:
      return state;
  }
};
