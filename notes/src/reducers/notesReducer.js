import {
  FETCHING_DATA,
  FETCHED_DATA,
  FETCH_ERROR,
  ADDING_DATA,
  ADDED_DATA,
  ADD_ERROR,
  DELETING_DATA,
  DELETED_DATA,
  DELETE_ERROR,
  EDITING_DATA,
  EDITED_DATA,
  EDIT_ERROR,
  SEARCH_DATA,
} from '../actions';

const initialState = {
  notes: [],
  fetchingData: false,
  addingData: false,
  deletingData: false,
  editingData: false,
  error: null,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        fetchingData: true,
        error: null,
      };
    case FETCHED_DATA:
      const length = action.payload.length;
      return {
        ...state,
        fetchingData: false,
        notes: action.payload.slice(length - 100, length),
        error: null,
      };
    case FETCH_ERROR:
      console.log(action.payload);
      return {
        ...state,
        fetchingData: false,
        error: action.payload,
      };
    case ADDING_DATA:
      return {
        ...state,
        addingData: true,
      };
    case ADDED_DATA:
      return {
        ...state,
        addingData: false,
      };
    case ADD_ERROR:
      return {
        ...state,
        error: action.payload,
        addingNote: false,
      };
    case DELETING_DATA:
      return {
        ...state,
        deletingData: true,
      };
    case DELETED_DATA:
      return {
        ...state,
        deletingData: false,
      };
    case DELETE_ERROR:
      return {
        ...state,
        error: action.payload,
        deletingNote: false,
      };
    case EDITING_DATA:
      return {
        ...state,
        editingData: true,
      };
    case EDITED_DATA:
      return {
        ...state,
        editingData: false,
      };
    case EDIT_ERROR:
      return {
        ...state,
        error: action.payload,
        editingData: false,
      };
    case SEARCH_DATA:
      return {
        ...state,
        notes: state.notes.filter(
          (note) =>
            note.title.includes(action.payload) ||
            note.textBody.includes(action.payload)
        ),
      };
    default:
      return state;
  }
};
