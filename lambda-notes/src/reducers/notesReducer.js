import { FETCHING_DATA, DATA_SUCCESS, DATA_ERROR } from '../actions';

const initialState = {
  fetchingNotes: false,
  notes: [],
  error: null
}

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        fetchingNotes: true
      };
    case DATA_SUCCESS:
      return {
        ...state,
        notes: [
          ...action.results
        ],
        fetchingNotes: false
      };
    case DATA_ERROR:
      return {
        ...state,
        fetchingNotes: false,
        error: action.error
      };
    default:
      return state;
  }
}