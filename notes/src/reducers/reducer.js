import {
  SUBMIT_NEW_NOTE,
  FETCH_SINGLE_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  FETCH_NOTES
} from "../actions/action";

const initialState = {
  notes: [],
  singleNote: ""
};

export const notesReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FETCH_NOTES:
      return Object.assign({}, state, {
        notes: action.payload
      });
    case SUBMIT_NEW_NOTE:
      let newNote = state.notes.slice();
      newNote.push(action.payload);
      return Object.assign({}, state, {
        notes: newNote
      });
    case FETCH_SINGLE_NOTE:
      let singleNote = state.notes.slice();
      singleNote = singleNote.filter(note => {
        if (note._id === action.payload) {
          return note;
        }
      });
      return Object.assign({}, state, {
        singleNote: singleNote
      });
    case EDIT_NOTE:
      let notes = state.notes.slice();
      notes = notes.map(note => {
        if (note.id === action.payload.id) {
          note = action.payload;
        }
        return note;
      });
      return Object.assign({}, state, { notes: notes });
    case DELETE_NOTE:
      console.log("DELETING");
      let toDelete = state.notes.slice();
      toDelete = toDelete.filter(note => {
        if (note.id !== action.payload) {
          return note;
        }
      });
      return Object.assign({}, state, { notes: toDelete });
    default:
      return state;
  }
};
