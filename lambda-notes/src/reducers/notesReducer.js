// Action imports
import {
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_FAILURE,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_FAILURE,
  FETCH_SINGLE_NOTE,
  DELETE_NOTE
} from '../actions';

// InitialState Set
const initialState = [];

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTES_SUCCESS:
      // return action.payload;
      return action.payload;
    case FETCH_NOTES_FAILURE:
      return action.payload;
    case ADD_NOTE_SUCCESS:
      return [...state, action.payload];
    case ADD_NOTE_FAILURE:
      return action.payload;
    case FETCH_SINGLE_NOTE:
      return [action.payload];
    case DELETE_NOTE:
      return (state = state.filter(note => note._id !== action.payload));
    default:
      return state;
  }
};
