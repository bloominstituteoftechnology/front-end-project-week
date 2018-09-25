import {
  NOTES_FETCH_START,
  NOTES_FETCH_COMPLETE,
  NOTES_FETCH_ERROR,
  ADD_NOTE_START,
  ADD_NOTE_COMPLETE,
  ADD_NOTE_ERROR,
  DELETE_NOTE_START,
  DELETE_NOTE_COMPLETE,
  DELETE_NOTE_ERROR,
  SET_UPDATE_NOTE,
  UPDATE_NOTE_START,
  UPDATE_NOTE_COMPLETE,
  UPDATE_NOTE_ERROR
} from "../actions";

const initialstate = {
  notes: [],
  addingNote: false,
  isLoading: false,
  isDeleting: false,
  isUpdating: false,
  noteToUpdate: null,
  error: ""
};

const notesReducer = (state = initialstate, action) => {
  switch (action.type) {
    case NOTES_FETCH_START:
      return { ...state, isLoading: true };
    case NOTES_FETCH_COMPLETE:
      return { ...state, isLoading: false, notes: action.payload };
    case NOTES_FETCH_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case ADD_NOTE_START:
      return { ...state, isLoading: true };
    case ADD_NOTE_COMPLETE:
      return { ...state, isLoading: false, notes: action.payload };
    case ADD_NOTE_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case DELETE_NOTE_START:
      return { ...state, isDeleting: true };
    case DELETE_NOTE_COMPLETE:
      return { ...state, isDeleting: false, notes: action.payload };
    case DELETE_NOTE_ERROR:
      return { ...state, isDeleting: false, error: action.payload };
    case SET_UPDATE_NOTE:
      const note = state.notes.find(note => note.id === action.payload);
      return { ...state, noteToUpdate: note ? note : null };
    case UPDATE_NOTE_START:
      return { ...state, isUpdating: true };
    case UPDATE_NOTE_COMPLETE:
      return { ...state, isUpdating: false, notes: action.payload };
    case UPDATE_NOTE_ERROR:
      return { ...state, isUpdating: false, error: action.payload };
    default:
      return state;
  }
};

export default notesReducer;
