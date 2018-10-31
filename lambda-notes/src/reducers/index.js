import {
  GET_ALL_NOTES,
  ADD_CHECKED,
  REMOVE_CHECKED,
  CLEAR_ALL_CHECKED,
  CHECK_ALL,
  RECORD_SELF_ADDED,
  SET_SEARCH_PARAM
} from '../actions'

const initialState = {
  notes: [],
  checked: [],
  self_added: [],
  searchParam: ''
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
    case SET_SEARCH_PARAM:
      return {
        ...state,
        searchParam: action.param
      }
    default:
      return state
  }
}
