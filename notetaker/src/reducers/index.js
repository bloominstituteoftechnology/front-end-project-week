import { FETCHING_SMURFS, ERROR, FETCHED_SMURFS, ADDING_SMURF, ADDED_SMURF } from '../actions';

const initialState = {
    notes: [],
    fetchingSmurfs: false,
    fetchedSmurfs: false,
    addingSmurf: false,
    addedSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null
  };

  const smurfsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_SMURFS:
        return Object.assign({}, state, { fetchingSmurfs: true });
      case FETCHED_SMURFS:
        return Object.assign({}, state, { 
          fetchingSmurfs: false, 
          fetchedSmurfs: true, 
          smurfs: [...state.smurfs, ...action.payload] 
        });
      case ADDING_SMURF:
        return Object.assign({}, state, { addingSmurf: true });
      case ADDED_SMURF:
        return Object.assign({}, state, { 
          addingSmurf: false, 
          addedSmurf: true, 
          smurfs: [...state.smurfs, ...action.payload] 
        });
      case ERROR:
        return Object.assign({}, state, { fetchingSmurfs: false, addingSmurf: false, error: action.payload });
      default:
        return state;
    }
  };
  
  export default smurfsReducer;