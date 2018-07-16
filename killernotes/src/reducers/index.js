/* prettier-ignore */
import {FETCHING, FETCHED, ERROR} from '../actions';

const initialState = {
  fetchingNotes: false,
  fetchedNotes: false,
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
