import {
  QUERY_NOTES,
  FETCHING_NOTES,
  GET_NOTES_ERROR,
  FETCHED_NOTES,
  PUTTING_NOTE,
  PUT_NOTE_ERROR,
  PUT_NOTE,
  POSTING_NOTE,
  POST_NOTE_ERROR,
  POSTED_NOTE,
  DELETING_NOTE,
  DELETE_NOTE_ERROR,
  DELETED_NOTE,
  FETCHING_NOTE_BY_ID,
  FETCHED_NOTE_BY_ID_ERROR,
  FETCHED_NOTE_BY_ID,
} from '../actions';

// initial app state
const initialState = {
  gettingNotes: false,
  gettingNote: false,
  postingNote: false,
  deletingNote: false,
  puttingNote: false,
  notes: [],
  filtered: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_NOTES:
      return { ...state, gettingNotes: true };
    case GET_NOTES_ERROR:
      return { ...state, error: action.errorMessage };
    case FETCHED_NOTES:
      return {
        ...state,
        notes: action.notes,
        gettingNotes: false,
        error: false,
      };

    case QUERY_NOTES:
      console.log('state.notes', state.notes);
      return {
        ...state,
        filtered: state.notes.filter(
          note =>
            note.title.includes(action.query) ||
            note.content.includes(action.query)
        ),
      };

    case FETCHING_NOTE_BY_ID:
      return { ...state, gettingNote: true };
    case FETCHED_NOTE_BY_ID_ERROR:
      return { ...state, error: action.errorMessage };
    case FETCHED_NOTE_BY_ID:
      return {
        ...state,
        note: { ...action.note },
        gettingNote: false,
        error: false,
      };

    case PUTTING_NOTE:
      return { ...state, puttingNote: true };
    case PUT_NOTE_ERROR:
      return { ...state, error: action.errorMessage };
    case PUT_NOTE:
      return { ...state, notes: [...action.note], puttingNote: false };

    case POSTING_NOTE:
      return { ...state, postingNote: true };
    case POST_NOTE_ERROR:
      return { ...state, error: action.errorMessage };
    case POSTED_NOTE:
      return { ...state, postingNote: false, error: null };

    case DELETING_NOTE:
      return { ...state, deletingNote: true };
    case DELETE_NOTE_ERROR:
      return { ...state, error: action.errorMessage };
    case DELETED_NOTE:
      return {
        ...state,
        notes: action.notes,
        deletingNote: false,
        error: null,
      };
    default:
      return state;
  }
};
