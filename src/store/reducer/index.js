import {
  FETCH_NOTES,
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_FAILURE,
  ADD_NOTE,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_FAILURE,
  EDIT_NOTE,
  EDIT_NOTE_SUCCESS,
  EDIT_NOTE_FAILURE,
  DELETE_NOTE,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAILURE,
  FILTER_NOTES,
  SORT_NOTES
} from "../actions";

const initialState = {
  notes: [],
  filteredNotes: [],
  fetchingNotes: false,
  error: null
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTES:
      return {
        ...state,
        fetchingNotes: true,
        filteredNotes: [],
        error: null
      };
    case FETCH_NOTES_SUCCESS:
      return {
        ...state,
        notes: action.payload,
        fetchingNotes: false,
        error: null
      };
    case FETCH_NOTES_FAILURE:
      return {
        ...state,
        fetchingNotes: false,
        error: action.payload
      };
    case ADD_NOTE:
      return {
        ...state,
        fetchingNotes: false,
        error: null
      };
    case ADD_NOTE_SUCCESS:
      return {
        ...state,
        notes: [...state.notes, action.payload],
        fetchingNotes: false,
        error: null
      };
    case ADD_NOTE_FAILURE:
      return {
        ...state,
        fetchingNotes: false,
        error: action.payload
      };
    case EDIT_NOTE:
      return {
        ...state,
        fetchingNotes: false,
        error: null
      };
    case EDIT_NOTE_SUCCESS:
      return {
        ...state,
        fetchingNotes: true,
        notes: state.notes.map(note =>
          note._id === action.payload._id ? action.payload : note
        ),
        error: null
      };
    case EDIT_NOTE_FAILURE:
      return {
        ...state,
        fetchingNotes: false,
        error: action.payload
      };
    case DELETE_NOTE:
      return {
        ...state,
        fetchingNotes: false,
        error: null
      };
    case DELETE_NOTE_SUCCESS:
      return {
        ...state,
        notes: state.notes.filter(note => note._id !== action.payload),
        fetchingNotes: false,
        error: null
      };
    case DELETE_NOTE_FAILURE:
      return {
        ...state,
        fetchingNotes: false,
        error: action.payload
      };
    case FILTER_NOTES:
      return {
        ...state,
        filteredNotes:
          action.payload !== ""
            ? state.notes.filter(note => {
                return note.title
                  .toLowerCase()
                  .includes(action.payload.toLowerCase());
              })
            : "",
        notes: state.filteredNotes.length ? state.filteredNotes : state.notes
      };
    case SORT_NOTES:
      return {
        ...state,
        notes:
          action.payload === "ascending"
            ? state.notes.sort((a, b) => a["title"].localeCompare(b["title"]))
            : state.notes.sort((a, b) => b["title"].localeCompare(a["title"]))
      };
    default:
      return state;
  }
};

export default notesReducer;
