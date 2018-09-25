import {
  NOTES_FETCH_START,
  NOTES_FETCH_COMPLETE,
  NOTES_FETCH_ERROR,
  NOTES_DELETE_START,
  NOTES_DELETE_COMPLETE,
  NOTES_DELETE_ERROR
} from "../actions";

const initialState = {
  notes: [],
  fetchingNotes: false,
  deletingNotes: false,
  error: null
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTES_FETCH_START:
      return { ...state, fetchingNotes: true };
    case NOTES_FETCH_COMPLETE:
      return { ...state, fetchingNotes: false, notes: action.payload };
    case NOTES_FETCH_ERROR:
      console.log(action.payload);
      return { ...state, fetchingNotes: false, error: action.payload };
    case NOTES_DELETE_START:
      return { ...state, deletingNote: true };
    case NOTES_DELETE_COMPLETE:
      return { ...state, deletingNote: false, notes: action.payload };
    case NOTES_DELETE_ERROR:
      console.log(action.payload);
    default:
      return state;
  }
};
