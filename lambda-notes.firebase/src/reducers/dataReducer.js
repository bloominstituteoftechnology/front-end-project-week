import { FETCHING_NOTES, FETCHED_NOTES, ERROR } from "../actions/types";

const initialState = {
    notes: {},

    fetching: false,
    fetched: false,

    error: null
}


export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_NOTES:
    return {
        ...state,
        fetching: true,
        fetched: false,
    }
    case FETCHED_NOTES:
    return {
        ...state,
        fetching: false,
        fetched: true,
        notes: action.notes
    }
    case ERROR:
    return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.error
    }
    default:
      return state;
  }
};