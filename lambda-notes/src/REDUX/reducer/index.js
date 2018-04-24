import {
  FETCH_NOTES, FETCHING_ERROR, DELETED_NOTE, TOGGLE_NIGHT
} from '../actions';

const initialState = {
  notes: [],
  error: "",
  night: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_NOTES:
      return {
        ...state,
        notes: [...action.payload]
      }

    case FETCHING_ERROR:
      return {
        ...state,
        error: "We couldn't retrieve your notes!"
      }

    case DELETED_NOTE:
      return {
        ...state,
        notes: [...action.payload]
      }

    case TOGGLE_NIGHT:
      return {
        ...state,
        night: !state.night
      }

    default:
      return state;
  }
}