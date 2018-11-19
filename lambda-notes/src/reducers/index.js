import { LOADING, SUCCESS, ERROR } from '../actions/index';

const initialState = {
  notes: [],
  error: "",
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return Object.assign({}, state, {loading: true})
    case SUCCESS:
      return Object.assign({}, state, {notes: action.payload, loading: false, error: ""})
    case ERROR:
      return Object.assign({}, state, {error: action.payload, loading: false})
    default:
      return state;
  }
}