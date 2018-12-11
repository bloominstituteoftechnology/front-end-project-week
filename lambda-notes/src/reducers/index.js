import {
  ADD_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  FETCH_DATA,
  DATA_FETCHED,
  ERROR
} from "../actions";

const initialState = {
  notes: [],
  fetching: false,
  success: false,
  error: null
};

export const noteReducers = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_DATA:
      return { ...state, fetching: true };
    case ERROR:
      return { ...state, error: "Error" + action.err };
    case DATA_FETCHED:
      return { ...state, notes: action.payload, fetching: false };
    case ADD_NOTE:
      const newNote = { ...action.payload };
      return {
        notes: [
          ...state.notes,
          {
            ...newNote
          }
        ],
        fetching: false
      };

    case EDIT_NOTE:
      let editNoteLocation = state.notes.findIndex(
        note => note._id === action.payload._id
      );
      
      return {
        notes: [
          ...state.notes.slice(0, editNoteLocation),
          { ...action.payload },
          ...state.notes.slice(editNoteLocation + 1)
        ],
        fetching: false
      };

      case DELETE_NOTE:
      let noteLocation = state.notes.findIndex(note => note._id === action.id);
      return {
        notes: [
          ...state.notes.slice(0, noteLocation),
          ...state.notes.slice(noteLocation + 1)
        ],
        fetching: false
      };

    default:
      return state;

  }
};