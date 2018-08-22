import {
  FETCHING,
  ERROR,
  POSTING,
  DELETING,
  UPDATING,
  GETTING_NOTE
} from '../actions'

const initialState = { fetching: false, error: false }

export const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetching: action.payload }
    case ERROR:
      return { ...state, error: action.payload }
    case POSTING:
      return { ...state, fetching: action.payload }
    case DELETING:
      return { ...state, fetching: action.payload }
    case UPDATING:
      return { ...state, fetching: action.payload }
    case GETTING_NOTE:
      return { ...state, fetching: action.payload }
    default:
      return state
  }
}
