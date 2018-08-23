/*
  Be sure to import in all of the action types from `../actions`
*/
import * as actionTypes from '../actions';


//  Your initial/default state for this project could *Although does not have to* look a lot like this
const initialState = {
   notes: [{
       notetitle:'',
       notebody:''
   }],
   fetchingNotes: false,
   addingNote: false,
   updatingNote: false,
   deletingNote: false,
   error: null
 };

 export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.FETCHING_NOTESS:
    //   return { ...state, fetchingNotes: true };
      case actionTypes.FETCH_NOTES:
      return { ...state, notes: action.payload, fetchingNotes: false };
    // case actionTypes.ADDING_NOTE:
    //   return { ...state, addingNote: false };
    //   case actionTypes.ADD_NOTE:
    //   return { ...state, notes: action.payload, addingNote: false };
    // case actionTypes.UPDATING_NOTE:
    //   return { ...state, updatingNote: true };
    //   case actionTypes.UPDATE_NOTE:
    //   return { ...state, notes: action.payload, updatingNote: false };
    
    // case actionTypes.DELETING_NOTE:
    //   return { ...state, deletingNote: true };
    //   case actionTypes.DELETE_NOTE:
    //   return { ...state, notes: action.payload, deletingNote: false };
    
    case actionTypes.ERROR:
      return {
        ...state,
        fetchingNotes: false,
        addingNote: false,
        updatingNote: false,
        deletingNote: false,
        error: action.payload
      };
    default:
      return state;
  }
};
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/