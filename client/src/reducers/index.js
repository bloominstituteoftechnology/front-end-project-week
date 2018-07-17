import {
  FETCH_NOTES,
  FETCHING,
  ERROR,
  FETCH_SINGLE_NOTE,
  ADD_NOTE
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
      return { ...state, notes: action.payload, loading: false };
    case FETCH_SINGLE_NOTE:
      return { ...state, note: action.payload };
    case ADD_NOTE:
      return { ...state, notes: action.payload, loading: false };
    case FETCHING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
