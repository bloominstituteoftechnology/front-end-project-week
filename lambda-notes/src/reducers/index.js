import { FETCH_NOTES, FETCHED_NOTES, ERROR_FETCHING, CREATE_NOTE, ERROR_CREATING } from '../actions';

//   DELETE_NOTE, ERROR_DELETING

 const initialState = {
   notes: [],
   fetchingNotes: false,
   creatingNote: false,
//  updatingNote: false,
//    deletingNote: false,
   error: null
 }


export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_NOTES:
      return Object.assign({}, state, { fetchingNotes: true });

    case FETCHED_NOTES:
      return Object.assign({}, state, {
        notes: [ ...action.payload ],
        fetchingNotes: false,
        error: null
      });

    case ERROR_FETCHING:
      return Object.assign({}, state, {
        error: action.payload,
      });

      case CREATE_NOTE:
      return Object.assign({}, state, {
        notes: [...action.payload],
        creatingNote: true,
        error: null
    });

    case ERROR_CREATING:
      return Object.assign({}, state, {
        error: action.payload,
    });
    
    default:
      return state;
    }
};

export default rootReducer;