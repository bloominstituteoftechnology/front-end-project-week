// import { LOADING, GET_NOTES, ERROR } from '../actions/notesActions'
// NOV 25
import { LOADING, GET_NOTES, CREATE_NOTE, ERROR } from '../actions/notesActions'

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
      return Object.assign({}, state, {notes: action.payload, loading: false, error: ''})

    case ERROR:
      return Object.assign({}, state, {error: action.errorMessage, loading: false})
// NOV 25
case CREATE_NOTE:
return { ...state, notes: action.payload, creatingNote: false };

    default:
      return state
  }
}