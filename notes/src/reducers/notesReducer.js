import { LOADING, GET_NOTES, ERROR } from '../actions/notesActions'

const initialState = {
  notes: [],
  error: '',
  loading: false
};

export default (state = initialState, action) => {
  switch(action.type){
    case LOADING:
      return Object.assign({}, state, {loading: true})
    case GET_NOTES:
      return Object.assign({}, state, {notes: action.notes, loading: false, error: ''})
    case ERROR:
      return Object.assign({}, state, {error: action.errorMessage, loading: false})
    default:
      return state
  }
}