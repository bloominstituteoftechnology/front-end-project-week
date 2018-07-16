import { GET_NOTES } from '../actions'

export const notesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_NOTES:
      return [ ...action.payload ]
    default:
      return state
  }
}
