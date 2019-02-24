import { FETCHING, ERROR, FETCHED } from "../actions"

const initialState = {
  notes: [],
  fetching: false,
  error: ""
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetching: true,
        error: ""
      }

    case ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }

    case FETCHED:
      return {
        ...state,
        fetching: false,
        error: "",
        notes: action.payload
      }

    default:
      return state
  }
}
