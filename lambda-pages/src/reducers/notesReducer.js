import {
  GET_ALL_NOTES,
  GET_ALL_NOTES_SUCCESS,
  GET_ALL_NOTES_FAILURE
} from '../actions';

const initalState = {
  notes: [],
  isFetching: false,
  error: null
};

export const notesReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_ALL_NOTES:
      return {
        ...state,
        isFetching: true
      };
    case GET_ALL_NOTES_SUCCESS:
      return {
        ...state,
        notes: [...action.payload],
        isFetching: false
      };
    case GET_ALL_NOTES_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};
