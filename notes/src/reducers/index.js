import {
  FETCH_NOTES,
  FETCH_NOTE,
  ADD_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  OPEN_MODAL,
  CLOSE_MODAL,
  SHOW_EDIT,
  HIDE_EDIT
} from "../actions";

const initialState = {
  notes: [],
  note: null,
  editing: false,
  open: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTES:
      return {
        ...state,
        notes: [...state.notes, ...action.payload]
      };

    case FETCH_NOTE:
      return {
        ...state,
        note: action.payload
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload]
      };
    case EDIT_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload]
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
    default:
      return state;
  }
};

export default rootReducer;
