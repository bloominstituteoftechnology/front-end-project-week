/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could look a lot like this
 {
   
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  Components can read your store as, `state` and not `state.fooReducer`.
*/
import {LOADING, ERROR, LOADED, CREATE } from '../actions';

const initialState = {
  notes: [],
  loadingNotes: false,
  addingNote: false,
  updatingNote: false,
  deletingNote: false,
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case LOADING:
      return { ...state, loadingNotes: true };
    case LOADED:
      return {...state, loadingNotes: false, addingNote: false, notes: action.payload, error: null};
    case CREATE:
      return {...state, addingNote: true};
    default:
      return state; 
  }
}