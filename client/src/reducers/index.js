import {
  FETCH_NOTES,
  FETCHING,
  ERROR,
  FETCH_SINGLE_NOTE,
  ADD_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
  SEARCH
} from '../actions/types';

const initialState = {
  notes: [],
  error: null,
  loading: true,
  note: {},
  term: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTES:
      return {
        ...state,
        notes: action.payload,
        loading: false,
        error: null,
        term: ''
      };
    case FETCH_SINGLE_NOTE:
      return {
        ...state,
        note: action.payload,
        loading: false,
        error: null,
        term: ''
      };
    case ADD_NOTE:
      return {
        ...state,
        note: action.payload,
        loading: false,
        error: null,
        term: ''
      };
    case UPDATE_NOTE:
      return {
        ...state,
        note: action.payload,
        loading: false,
        error: null,
        term: ''
      };
    case DELETE_NOTE:
      return {
        ...state,
        loading: false,
        error: null,
        note: {},
        term: ''
      };
    case FETCHING:
      return { ...state, loading: true, error: null };
    case SEARCH:
      // this might need to be refactored
      const notes = state.notes.filter(
        note =>
          note.textBody.toLowerCase().includes(action.payload.toLowerCase()) ||
          note.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      return { ...state, notes: notes, term: action.payload };
    case ERROR:
      return { ...state, error: action.payload, loading: false, term: '' };
    default:
      return state;
  }
};
