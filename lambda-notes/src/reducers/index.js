import {
  GETTING_NOTES,
  NOTES_GOT,
  FAILURE,
  ADDING_NOTE,
  NOTE_ADDED
} from "../actions";

const initialState = {
  notes: [],
  gettingNotes: false,
  notesGot: false,
  error: null,
  addingNote: false
};

const lambdaReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GETTING_NOTES:
      return { ...state, gettingNotes: true };
    case NOTES_GOT:
      return { ...state, gettingNotes: false, notesGot: true, notes: payload };
    case FAILURE:
      return { ...state, gettingNotes: false, notesGot: false, error: payload };
    case ADDING_NOTE:
      return { ...state, addingNote: true };
    case NOTE_ADDED:
      return { ...state, addingNote: false, notes: [...state.notes ,payload] };
    default:
      return state;
  }
};

export default lambdaReducer;
