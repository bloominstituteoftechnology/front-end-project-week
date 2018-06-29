import {
  FETCHING_NOTES,
  ADDED_NOTE,
  UPDATED_NOTE,
  DELETED_NOTE,
  SUCCESS,
  ERROR
} from "../Actions/index";

const initialState = {
  notes: [],
  fetchingNotes: false,
  addingNote: false,
  updatingNote: false,
  deletingNote: false,
  success: false,
  error: null
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_NOTES:
      return Object.assign({}, state, {
        fetchingNotes: true,
        success: false,
        error: null
      });
    case ADDED_NOTE:
      return Object.assign({}, state, {
        addingNotes: true,
        success: false,
        notes: state.notes.concat(action.payload)
      });
    case UPDATED_NOTE:
      return Object.assign({}, state, {
        updatingNote: true,
        success: false,
        notes: action.payload
      });
    case DELETED_NOTE:
      return Object.assign({}, state, {
        deletingNote: true,
        success: false,
        notes: action.payload
      });
    case SUCCESS:
      return Object.assign({}, state, {
        fetchingNotes: false,
        addingNote: false,
        updatingNote: false,
        deletingNote: false,
        success: true,
        notes: action.payload,
        error: null
      });
    case ERROR:
      return Object.assign({}, state, {
        fetchingNotes: false,
        addingNote: false,
        updatingNote: false,
        deletingNote: false,
        success: false,
        error: action.payload
      });
    default:
      return state;
  }
};
