import {
  FETCHING_NOTES,
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_FAILURE,
  ADDING_NOTE,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_FAILURE,
  SELECTING_NOTE,
  EDITING_NOTE,
  EDIT_NOTE_SUCCESS,
  STOP_EDITING,
  SHOW_MODAL,
  HIDE_MODAL,
  DELETING_NOTE,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAILURE,
} from '../actions';

const initialState = {
  notes: [],
  selectedNote: null,
  error: null,
  isEditing: false,
  fetching: false,
  deleting: false,
  adding: false,
  showingModal: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_NOTES:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_NOTES_SUCCESS:
      return {
        ...state,
        fetching: false,
        notes: action.payload,
      };
    case FETCH_NOTES_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    case ADDING_NOTE:
      return {
        ...state,
        isEditing: false,
        adding: true,
      };
    case ADD_NOTE_SUCCESS:
      return {
        ...state,
        adding: false,
      };
    case ADD_NOTE_FAILURE:
      return {
        ...state,
        adding: false,
        error: action.payload,
      };

    case SELECTING_NOTE:
      return {
        ...state,
        selectedNote: state.notes.find(n => `${n._id}` === action.payload),
      };
    case EDITING_NOTE:
      return {
        ...state,
        isEditing: true,
      };
    case STOP_EDITING:
      return {
        ...state,
        isEditing: false,
      };
    case EDIT_NOTE_SUCCESS:
      return {
        ...state,
        isEditing: false,
      };
    case SHOW_MODAL:
      return {
        ...state,
        showingModal: true,
      };
    case HIDE_MODAL:
      return {
        ...state,
        showingModal: false,
      };
    case DELETING_NOTE:
      return {
        ...state,
        deleting: true,
      };
    case DELETE_NOTE_SUCCESS:
      return {
        ...state,
        deleting: false,
      };
    case DELETE_NOTE_FAILURE:
      return {
        ...state,
        deleting: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
