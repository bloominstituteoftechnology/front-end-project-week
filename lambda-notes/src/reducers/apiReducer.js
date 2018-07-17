import { FETCHING, ERROR, POSTING, DELETING } from '../actions'

const initialState = { fetching: true, error: false }

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
    default:
      return state
  }
}
