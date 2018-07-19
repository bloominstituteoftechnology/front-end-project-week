import { FETCHING_NOTES, FETCHED_NOTES, ERROR, FETCH_ONE_NOTE, ADD_NOTES, DELETED, UPDATED } from '../actions';

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
    console.log(' action payload: ', action.payload)
      return Object.assign({}, state, { loading: false, success: true, notes: action.payload})
    case FETCH_ONE_NOTE:
      return Object.assign({}, state, { loading: false, success: true, notes: action.payload})
    case ERROR:
      return Object.assign({}, state, { error: action.payload, success: false, loading: false })
    case ADD_NOTES:
      return Object.assign({}, state, { loading: false, success: true, notes: action.payload });
   case DELETED:
      return Object.assign({}, state, { loading: false, success: true, notes: action.payload })
    case UPDATED:
      return Object.assign({}, state, { loading: false, success: true, notes: action.payload })
    default: 
      return state;
    }
  }

  export default NotesReducer;