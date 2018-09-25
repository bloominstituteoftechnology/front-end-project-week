import {
  ADDING_NOTE,
  NOTE_ADDED,
  UPDATING_NOTE,
  NOTE_UPDATED,
  DELETING,
  DELETED,
  FETCHED,
  FETCHING,
  SINGLE_FETCHED,
  FETCHING_SINGLE,
  ERROR
} from "../actions";

const initialState = {
  notes: [],
  fetchingNotes: false,
  fethingNote: false,
  addingNote: false,
  updatingNote: false,
  deletingNote: false,
  error: null,
  note: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetchingNotes: true };

    case FETCHED:
      return { ...state, fetchingNotes: false, notes: action.payload };

    case FETCHING_SINGLE:
      return { ...state, fetchingNote: true };

    case SINGLE_FETCHED:
      return { ...state, fetchingNote: false, note: action.payload };

    case ADDING_NOTE:
      return { ...state, addingNote: true };

    case NOTE_ADDED:
      return {
        ...state,
        addingNote: false,
        notes: [...state.notes, action.payload]
      };

    case UPDATING_NOTE:
      return { ...state, updatingNote: true };

    // when someone clicks 'save' and updates a NOTE

    case NOTE_UPDATED:
      const notes = state.notes.filter(n => n._id !== action.id);
      return { ...state, notes: [...notes, action.updatedNote] };

    /////////////////////////////////////

    case DELETING:
      return { ...state, deletingNote: true };

    case DELETED:
      return {
        ...state,
        deletingNote: false,
        note: {},
        notes: state.notes.filter(note => action.id !== note._id)
      };

    case ERROR:
      return { ...state, error: action.payload, fetchingNotes: false };

    default:
      return state;
  }
};

export default rootReducer;
