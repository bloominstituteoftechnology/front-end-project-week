import { GET_NOTES, GET_NOTE, GET_TAGS, UPDATED_TAGS } from '../actions'

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
      return { ...action.payload }
    default:
      return state
  }
}

export const tagsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_TAGS:
      return action.payload
    case UPDATED_TAGS:
      return [ ...state, action.payload ]
    default:
      return state
  }
}
