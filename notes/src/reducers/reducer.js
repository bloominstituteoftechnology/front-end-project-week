import {
  FETCH_SINGLE_NOTE,
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
      return { ...state, notes: action.payload };
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
    default:
      return state;
  }
};
