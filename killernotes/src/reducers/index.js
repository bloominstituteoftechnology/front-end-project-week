/* prettier-ignore */
import {FETCHING, FETCHED, ERROR, DELETING, DELETED} from '../actions';

const initialState = {
  fetchingNotes: false,
  fetchedNotes: false,
  deletingNote: false,
  deletedNote: false,
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
      return { ...state, notes: newNotesArr };

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
