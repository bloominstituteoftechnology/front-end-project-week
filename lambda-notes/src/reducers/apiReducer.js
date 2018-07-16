import { FETCHING, ERROR } from '../actions'

const initialState = { fetching: true, error: false }

export const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetching: action.payload }
    case ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
