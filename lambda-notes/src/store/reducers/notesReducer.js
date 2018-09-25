import {
  NOTE_FETCH_START,
  NOTE_FETCH_COMPLETE,
  NOTE_FETCH_FAILURE,
  ADD_NOTE_START,
  ADD_NOTE_COMPLETE,
  ADD_NOTE_FAILURE,
  DELETE_NOTE_START,
  DELETE_NOTE_COMPLETE,
  DELETE_NOTE_FAILURE,
  UPDATE_NOTE_START,
  UPDATE_NOTE_COMPLETE,
  UPDATE_NOTE_FAILURE,
  SET_UPDATE_NOTE
} from "../actions";

const initialState = {
  addingNote: false,
  notes: [],
  isLoading: false,
  isDeleting: false,
  isUpdating: false,
  error: "",
  noteToUpdate: null
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTE_FETCH_START:
      return { ...state, isLoading: true };
    case NOTE_FETCH_COMPLETE:
      return { ...state, isLoading: false, notes: action.payload };
    case NOTE_FETCH_FAILURE:
      console.log(action.payload);
      return { ...state, isLoading: false, error: action.payload };
    case ADD_NOTE_START:
      return { ...state, addingNote: true };
    case ADD_NOTE_COMPLETE:
      return { ...state, addingNote: false, notes: action.payload };
    case ADD_NOTE_FAILURE:
      console.log(action.payload);
      return { ...state, addingNote: false, error: action.payload };
    case DELETE_NOTE_START:
      return { ...state, isDeleting: true };
    case DELETE_NOTE_COMPLETE:
      return { ...state, isDeleting: false, notes: action.payload };
    case DELETE_NOTE_FAILURE:
      console.log(action.payload);
      return { ...state, isDeleting: false, error: action.payload };
    case SET_UPDATE_NOTE:
      const note = state.notes.find(note => note.id === action.payload);
      return { ...state, noteToUpdate: note ? note : null };
    case UPDATE_NOTE_START:
      return { ...state, isUpdating: true };
    case UPDATE_NOTE_COMPLETE:
      return { ...state, isUpdating: false, notes: action.payload };
    case UPDATE_NOTE_FAILURE:
      console.log(action.payload);
      return { ...state, isUpdating: false, error: action.payload };
    default:
      return state;
  }
};
