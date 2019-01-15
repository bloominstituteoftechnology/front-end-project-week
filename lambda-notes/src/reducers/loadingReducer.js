import {
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_FAILURE,
  FETCH_NOTES,
  FETCH_SINGLE_NOTE
} from '../actions';

const initialState = false;

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTES:
      return true;
    case FETCH_NOTES_SUCCESS:
      return false;
    case FETCH_NOTES_FAILURE:
      return false;
    case FETCH_SINGLE_NOTE:
      return false;
    default:
      return state;
  }
};
