import {
  GET_ALL_NOTES,
  ADD_CHECKED,
  REMOVE_CHECKED,
  CLEAR_ALL_CHECKED,
  CHECK_ALL,
  RECORD_SELF_ADDED,
  SET_SEARCH_PARAM,
  SORT_TO_BEGINNING
} from '../actions'

const initialState = {
  notes: [],
  checked: [],
  selfAdded: [],
  searchParam: '',
  sortedOrder: []
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
        selfAdded: Array.isArray(action.payload)
          ? [...state.selfAdded, ...action.payload]
          : [...state.selfAdded, action.payload]
      }
    case SET_SEARCH_PARAM:
      return {
        ...state,
        searchParam: action.param
      }
    case SORT_TO_BEGINNING:
      return {
        ...state,
        sortedOrder: [action.id, ...state.sortedOrder]
      }
    default:
      return state
  }
}
