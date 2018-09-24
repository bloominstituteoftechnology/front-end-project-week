import {
  NOTES_FETCH_START,
  NOTES_FETCH_COMPLETE,
  NOTES_FETCH_ERROR,
  ADD_NOTE_START,
  ADD_NOTE_COMPLETE,
  ADD_NOTE_ERROR
} from "../actions";

const intialState = {
  notes: [],
  addingNote: false,
  isLoading: flase,
  error: ""
};

export const notesReducer = (state = initialstate, action) => {
  switch (action.type) {
    case NOTES_FETCH_START:
      return { ...state, isloading: true };
    case NOTES_FETCH_COMPLETE:
      return { ...state, isloading: false, notes: action.payload };
    case NOTES_FETCH_ERROR:
      return { ...state, isloading: false, error: action.payload };
    case ADD_NOTE_START:
      return { ...state, isloading: true };
    case ADD_NOTE_COMPLETE:
      return { ...state, isloading: false, notes: action.payload };
    case ADD_NOTE_ERROR:
      return { ...state, isloading: false, error: payload.action };
    default:
      return state;
  }
};
