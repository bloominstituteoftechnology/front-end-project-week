import {
  GET_ALL_NOTES,
  GET_NOTE_BY_ID,
  POST_NOTE,
  PUT_NOTE,
  DELETE_NOTE,
  ADD_CHECKED,
  REMOVE_CHECKED,
  CLEAR_ALL_CHECKED,
  CHECK_ALL,
  RECORD_SELF_ADDED
} from '../actions'

const initialState = {
  notes: [],
  checked: [],
  self_added: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_NOTES:
      return { ...state, notes: action.payload }
    case ADD_CHECKED:
      return { ...state, checked: [...state.checked, action.id] }
    case REMOVE_CHECKED:
      return {
        ...state,
        checked: [...state.checked.filter(id => id !== action.id)]
      }
    case CHECK_ALL:
      return {
        ...state,
        checked: action.allIds
      }
    case CLEAR_ALL_CHECKED:
      return {
        ...state,
        checked: []
      }
    case RECORD_SELF_ADDED:
      return {
        ...state,
        self_added: Array.isArray(action.payload)
          ? [...state.self_added, ...action.payload]
          : [...state.self_added, action.payload]
      }

    // case GET_NOTE_BY_ID:
    //   // do stuff depending on api res
    //   return state
    // case POST_NOTE:
    //   // do stuff depending on api res
    //   return state
    // case PUT_NOTE:
    //   // do stuff depending on api res
    //   return state
    // case DELETE_NOTE:
    //   // do stuff depending on api res
    //   return state
    default:
      return state
  }
}
