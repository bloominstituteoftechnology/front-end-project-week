/* prettier-ignore */
import {FETCHING, FETCHED, ERROR, DELETING, DELETED, ADDING, ADDED} from '../actions';

const initialState = {
  fetchingNotes: false,
  fetchedNotes: false,
  deletingNote: false,
  deletedNote: false,
  addingNote: false,
  addedNote: false,
  notes: [],
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetchingNotes: true };

    case FETCHED:
      return {
        ...state,
        notes: action.payload,
        fetchingNotes: false,
        fetchedNotes: true,
      };

    case DELETING:
      return { ...state, deletingNote: true };

    case DELETED:
      // have to update the array as server only sends 'success'
      const newNotesArr = state.notes.filter(n => n._id !== action.payload);
      return { ...state, deletingNote: false, notes: newNotesArr };

    case ADDING:
      return { ...state, addingNote: true };

    case ADDED:
      // response if new note's id
      const newNoteID = action.payload;
      return { ...state, addingNote: false, addedNote: true };

    case ERROR:
      return {
        ...state,
        fetchingNotes: false,
        fetchedNotes: false,
        error: action.payload.stack,
      };

    default:
      return state;
  }
};

export default rootReducer;
