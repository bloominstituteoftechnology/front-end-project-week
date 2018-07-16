import { FETCH_NOTES, FETCHING, ERROR, ADD_NOTE } from '../actions/types';

const initialState = {
  notes: [],
  error: null,
  loading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTES:
      return { ...state, notes: action.payload, loading: false };
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
