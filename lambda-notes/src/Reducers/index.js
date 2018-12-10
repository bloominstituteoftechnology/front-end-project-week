import {
  FETCHING_NOTES_START,
  FETCHING_NOTES_SUCCESS,
  FETCHING_NOTES_FAILURE
} from "../Actions/index";

const initialState = {
  notes: [],
  fetchingNotes: false,
  error: null
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
      case FETCHING_NOTES_START:
        return {
            ...state,
            fetchingNotes: true
        }
      case FETCHING_NOTES_SUCCESS:
        return {
            ...state,
            error: null,
            fetchingNotes: false,
            notes: action.payload
        }
      case FETCHING_NOTES_FAILURE:
        return {
            ...state,
            fetchingNotes: false,
            error: action.payload
        }
    default:
      return state;
  }
};

export default reducers;