import { FETCH_NOTES, FETCHED_NOTES, ERROR_FETCHING } from '../actions';

// , ADD_SMURF, ERROR_ADDING, DELETE_SMURF, ERROR_DELETING

 const initialState = {
   notes: [],
   fetchingNotes: false,
//    addingSmurf: false,
//  updatingSmurf: false,
//    deletingSmurfs: false,
   error: null
 }


export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_NOTES:
      return Object.assign({}, state, { fetchingNotes: true });

    case FETCHED_NOTES:
      return Object.assign({}, state, {
        notes: [...state.notes, ...action.payload],
        fetchingNotes: false,
        error: null
      });

    case ERROR_FETCHING:
      return Object.assign({}, state, {
        error: action.payload,
      });
    
    default:
      return state;
    }
};

export default rootReducer;