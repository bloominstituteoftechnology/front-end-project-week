
import {
  FETCHING_REQUEST,
  FETCHING_SUCCESS,
  FETCHING_FAILURE,
  ADDING,
  ADDING_SUCCESS,
  ADDING_FAILURE,
  DELETING,
  DELETING_SUCCESS,
  DELETING_FAILURE,
  EDITING_REQUEST,
  EDITING_SUCCESS,
  EDITING_FAILURE,
} from "../actions";

const initialState = {
  fetching: false,
  notes: [],
  error: null,
  newId : '',
  isSearched : false,
};

export const NoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_REQUEST:
      return { ...state, fetching: true };

    case FETCHING_SUCCESS:
        return { ...state, fetching: false, notes: [...action.payload] };

    case FETCHING_FAILURE:
      return { ...state, fetching: false, error: action.payload };

    case DELETING:
      return { ...state, fetching: true };

    case DELETING_SUCCESS:
    // API doesn't return anything.  so using ID in payload, delete a note with that ID first.
     let newNoteList = state.notes.filter( note => note._id !== action.payload);
      return { ...state, fetching: false, notes : [...newNoteList] };

    case DELETING_FAILURE:
      return { ...state, fetching: false, error: action.payload };

    case ADDING:
      return { ...state, fetching: true };

    case ADDING_SUCCESS:
    // API only returns a new ID for new note.  reducer combine id with new note and 
    // return a complete note object as payload
          return { ...state, fetching: false, notes: [...state.notes, action.payload] };

    case ADDING_FAILURE:
      return { ...state, fetching: false, error: action.payload };

      case EDITING_REQUEST:
      return { ...state, fetching: true };

    case EDITING_SUCCESS:
    // API returns edited note.  so, delete old version of the note and add the edited note
      let newNotes = state.notes.filter(note => note._id !== action.payload._id);

      return { ...state, fetching: false, notes: [...newNotes, action.payload] };

    case EDITING_FAILURE:
      return { ...state, fetching: false, error: action.payload };

      case "SEARCHTRUE":
      return { ...state, isSearched : true };

      case "SEARCHFALSE":
      console.log("reducer at SEARCHFALSE");
      return { ...state, isSearched : false };

    default:
      return state;
  }
};
