import {
  FETCH_SINGLE_NOTE,
  FETCH_NOTES,
  FETCHING_NOTES
} from "../actions/action";

const initialState = {
  notes: [],
  singleNote: { title: "", textBody: "", tags: [] },
  fetching: false
};

export const notesReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FETCHING_NOTES:
      return { ...state, fetching: true };
    case FETCH_NOTES:
      return {
        ...state,
        fetching: false,
        notes: action.payload
      };
    case FETCH_SINGLE_NOTE:
      return {
        ...state,
        singleNote: action.payload,
        fetching: false
      };
    /*console.log("action.payload is: ", action.payload);
      let singleNote = state.notes.slice();
      singleNote = singleNote.filter(note => {
        if (note._id === action.payload) {
          return note;
        }
      });
      return Object.assign({}, state, {
        singleNote: singleNote
      });*/
    default:
      return state;
  }
};
