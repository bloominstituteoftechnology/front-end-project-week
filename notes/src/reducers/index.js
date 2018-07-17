import { FETCHING_NOTES, FETCHED_NOTES, ERROR, FETCH_ONE_NOTE, ADDING_NOTES,  ADD_NOTES, DELETING, DELETED, UPDATING, UPDATED } from '../actions';

 const initialState =
 {
   notes: [],
   loading: false,
   success: false,
   error: null,
 }

export const NotesReducer = (state=initialState, action) => {
  switch(action.type) {
    case FETCHING_NOTES:
      return Object.assign({}, state, { loading: true })
    case FETCHED_NOTES:
      return Object.assign({}, state, { loading: false, success: true, notes: action.payload})
    case FETCH_ONE_NOTE:
      return Object.assign({}, state, { loading: false, success: true, notes: action.payload})
    case ERROR:
      return Object.assign({}, state, { error: action.payload, success: false, loading: false })
    case ADDING_NOTES:
      return Object.assign({}, state, { loading: true, success: false});
    case ADD_NOTES:
      return Object.assign({}, state, { loading: false, success: true, notes: action.payload });
    case DELETING:
      return Object.assign({}, state, { loading: true, success: false })
    case DELETED:
      return Object.assign({}, state, { loading: false, success: true, notes: action.payload })
      case UPDATING:
      return Object.assign({}, state, { loading: true, success: false })
    case UPDATED:
      return Object.assign({}, state, { loading: false, success: true, notes: action.payload })
      default: 
      return state;
    }
  }

  export default NotesReducer;