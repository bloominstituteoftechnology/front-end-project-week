import { FETCHING_NOTES, FETCHED_NOTES, ADD_NOTE } from '../actions';

const initialState = { notes: [], note: {}, fetching: false, error: '' };

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_NOTES:
      return { ...state, fetching: true };

    case FETCHED_NOTES:
      return {
        ...state,
        smurfs: action.payload,
        fetching: false
      };

    case ADD_NOTE:
      return { ...state, fetching: true };

    case ERRORS:
      return {
        ...state,
        fetching: false,
        error: `${action.payload}`
      };

    default:
      return state;
  }
};
