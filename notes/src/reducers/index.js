import {
  FETCHING_NOTES,
  FETCH_NOTES,
  FETCHING_NOTE,
  FETCH_NOTE,
  ADD_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  OPEN_MODAL,
  CLOSE_MODAL,
  SHOW_EDIT,
  HIDE_EDIT,
  TOGGLE_SORT,
  SORT,
  SEARCH
} from "../actions";

const initialState = {
  notes: [],
  fetchingNotes: false,
  fetchingNote: false,
  note: null,
  editing: false,
  open: false,
  showSort: false,
  criteria: ""
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_NOTES:
      return { ...state, fetchingNotes: true };
    case FETCH_NOTES:
      return {
        ...state,
        notes: [...state.notes, ...action.payload],
        fetchingNotes: false
      };
    case FETCHING_NOTE:
      return { ...state, fetchingNote: true };
    case FETCH_NOTE:
      return {
        ...state,
        note: action.payload,
        fetchingNote: false,
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload]
      };
    case EDIT_NOTE:
      return {
        ...state,
        notes: state.notes.map(
          note => (note._id === action.payload._id ? action.payload : note)
        )
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => note._id !== action.payload),
        open: false
      };
    case OPEN_MODAL:
      return {
        ...state,
        open: true
      };
    case CLOSE_MODAL:
      return {
        ...state,
        open: false
      };
    case SHOW_EDIT:
      return {
        ...state,
        editing: true
      };
    case HIDE_EDIT:
      return {
        ...state,
        editing: false
      };
    case SORT:
      return {
        ...state,
        notes: [...state.notes.sort(action.payload)]
      };
    case TOGGLE_SORT:
      return {
        ...state,
        showSort: !state.showSort
      };
    case SEARCH:
      return {
        ...state,
        criteria: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
