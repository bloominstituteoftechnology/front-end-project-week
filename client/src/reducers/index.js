import {
  FETCH_NOTES,
  FETCHING,
  ERROR,
  FETCH_SINGLE_NOTE,
  ADD_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE
} from '../actions/types';

const initialState = {
  notes: [],
  error: null,
  loading: true,
  note: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTES:
      return { ...state, notes: action.payload, loading: false, error: null };
    case FETCH_SINGLE_NOTE:
      return { ...state, note: action.payload, loading: false, error: null };
    case ADD_NOTE:
      return { ...state, notes: action.payload, loading: false, error: null };
    case UPDATE_NOTE:
      return { ...state, note: action.payload, loading: false, error: null };
    case DELETE_NOTE:
      return {
        ...state,
        loading: false,
        error: null,
        note: {}
      };
    case FETCHING:
      return { ...state, loading: true, error: null };
    case ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
