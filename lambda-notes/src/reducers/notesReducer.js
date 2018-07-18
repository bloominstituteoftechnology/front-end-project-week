import { GET_NOTES, GET_NOTE } from '../actions'

export const notesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_NOTES:
      return [ ...action.payload ]
    default:
      return state
  }
}

export const singleReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_NOTE:
      return action.payload
    default:
      return state
  }
}
