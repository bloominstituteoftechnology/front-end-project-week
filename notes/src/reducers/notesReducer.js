import {
  FETCHING_DATA,
  FETCHED_DATA,
  FETCH_ERROR,
  ADDING_DATA,
  ADDED_DATA,
  ADD_ERROR,
  DELETING_DATA,
  DELETED_DATA,
  DELETE_ERROR,
  EDITING_DATA,
  EDITED_DATA,
  EDIT_ERROR,
} from '../actions';

const initialState = {
  notes: [],
  fetchingData: false,
  error: null,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        fetchingData: true,
        error: null,
      };
    case FETCHED_DATA:
      return {
        ...state,
        fetchingData: false,
        notes: action.payload,
        error: null,
      };
    case FETCH_ERROR:
      console.log(action.payload);
      return {
        ...state,
        fetchingData: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
