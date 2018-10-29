// Action imports
import { FETCH_NOTES_SUCCESS, FETCH_NOTES_FAILURE } from '../actions';

// InitialState Set
const initialState = [];

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTES_SUCCESS:
      return action.payload;
    case FETCH_NOTES_FAILURE:
      return action.payload;
    default:
      return state;
  }
};
