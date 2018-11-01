import {
  ADD_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  FETCHING_NOTES,
  NOTES_FETCHED,
  NOTES_FETCH_FAIL,
  FETCH_SINGLE
} from "../actions";
const initialState = {
  selected: false,
  notes: [],
  erorr: null,
  fetchingNote: false,
  singleNote: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_NOTES:
      return { ...state, fetchingNote: true };
    case NOTES_FETCHED:
      return {
        ...state,
        fetchingNote: false,
        notes: [...action.payload]
      };
    case NOTES_FETCH_FAIL:
      return { ...state, error: action.payload };
    case DELETE_NOTE:
      return { ...state, notes: [...state.notes] };
    case FETCH_SINGLE:
      return { ...state, singleNote: action.payload };
    case EDIT_NOTE:
      return {
        ...state,
        notes: state.notes.map(note => {
          if (note._id === action._id) {
            return { ...action.payload };
          } else {
            return note;
          }
        })
      };
    default:
      return state;
  }
};
export default rootReducer;
