import {
  FETCH_NOTES_REQUEST,
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_FAILURE,
  ADD_NOTES_REQUEST,
  ADD_NOTES_SUCCESS,
  ADD_NOTES_FAILURE,
  DELETE_NOTES_REQUEST,
  DELETE_NOTES_SUCCESS,
  DELETE_NOTES_FAILURE,
  UPDATE_NOTES_REQUEST,
  UPDATE_FORM,
  UPDATE_FORM_COMPLETE
} from "../actions";

const initState = {
  notes: [],
  newNoteID: null,
  fetchingNotes: false,
  addingNote: false,    
  updatingNote: false,
  deletingNote: false,
  error: null,
  currentNote: null,
  populate: false
};

const notesReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_NOTES_REQUEST:
      return {
        ...state,
        fetchingNotes: true
      };
    case FETCH_NOTES_SUCCESS:
      return {
        ...state,
        fetchingNotes: false,
        notes: action.payload
      };
    case FETCH_NOTES_FAILURE:
      return {
        ...state,
        fetchingNotes: false,
        error: action.payload
      };
      case ADD_NOTES_REQUEST:
      return {
        ...state,
        addingNote: true
      };
      case ADD_NOTES_SUCCESS:
      return {
        ...state,
        addingNote: false,
      };
    case ADD_NOTES_FAILURE:
      return {
        ...state,
        addingNote: false,
        error: action.payload
      };
      case DELETE_NOTES_REQUEST:
      return {
        ...state,
        fetchingNotes: true,
        deletingNote: true,

      };
      case DELETE_NOTES_SUCCESS:
      return {
        ...state,
        fetchingNotes: false,
        deletingNote: false,

      };
    case DELETE_NOTES_FAILURE:
      return {
        ...state,
        fetchingNotes: false,
        deletingNote: false,

        error: action.payload
      };
    case UPDATE_NOTES_REQUEST:
      return {
        ...state,
        fetchingNotes: false,
        currentNote: null,
        addingNote: true,
        populate: false
      };
    
    case UPDATE_FORM:
    return {
      ...state,
      currentNote: action.payload,
      populate: true
    };
    case UPDATE_FORM_COMPLETE:
    return {
      ...state,
      populate: false

    }
    default:
      return state;
  }
};

export default notesReducer;

