import {
  NOTES_FETCH_START,
  NOTES_FETCH_COMPLETE,
  NOTES_FETCH_ERROR,
  NOTES_DELETE_START,
  NOTES_DELETE_COMPLETE,
  NOTES_DELETE_ERROR,
  NOTES_ADD_START,
  NOTES_ADD_COMPLETE,
  NOTES_ADD_ERROR,
  NOTES_UPDATE_START,
  NOTES_UPDATE_COMPLETE,
  NOTES_UPDATE_ERROR
} from "../actions";

const initialState = {
  notes: [],

  fetchingNotes: false,
  deletingNotes: false,
  addingNote: false,
  updatingNote: false,

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
    case NOTES_ADD_START:
      return { ...state, addingNote: true };
    case NOTES_ADD_COMPLETE:
      return { ...state, addingNote: false, notes: action.payload };
    case NOTES_ADD_ERROR:
      console.log(action.payload);
    case NOTES_UPDATE_START:
      return { ...state, updatingNote: true };
    case NOTES_UPDATE_COMPLETE:
      return { ...state, updatingNote: false, notes: action.payload };
    case NOTES_UPDATE_ERROR:
      console.log(action.payload);
    default:
      return state;
  }
};
