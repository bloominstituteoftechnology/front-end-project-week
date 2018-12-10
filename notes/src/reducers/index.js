/*
  Be sure to import in all of the action types from `../actions`
*/

import {
    FETCH_NOTES_START,
    FETCH_NOTES_SUCCESS,
    FETCH_NOTES_FAILURE,
    ADD_NOTE_START,
    ADD_NOTE_SUCCESS,
    ADD_NOTE_FAILURE,
    DELETE_NOTE_START,
    DELETE_NOTE_SUCCESS,
    DELETE_NOTE_FAILURE,
    EDIT_NOTE_START,
    EDIT_NOTE_SUCCESS,
    EDIT_NOTE_FAILURE
  } from "../actions";
  
  //Your initial/default state for this project could *Although does not have to* look a lot like this
  const initialState = {
    notes: [],
    fetching: false,
    error: null
  };
  
  /*
    You'll only need one smurf reducer for this project.
    Feel free to export it as a default and import as rootReducer. 
    This will guard your namespacing issues.
    There is no need for 'combineReducers' in this project.
    Components can then read your store as, `state` and not `state.fooReducer`.
  */
  
  const notesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_NOTES_START:
        return {
          ...state,
          fetching: true
        };
      case FETCH_NOTES_SUCCESS:
        return {
          ...state,
          error: null,
          fetching: false,
          notes: action.payload
        };
      case FETCH_NOTES_FAILURE:
        return {
          ...state,
          fetching: false,
          error: action.payload
        };
      case ADD_NOTE_START:
        return {
          ...state,
          fetching: true
        };
      case ADD_NOTE_SUCCESS:
        return {
          ...state,
          fetching: false,
          error: false,
          notes: action.payload
        };
      case ADD_NOTE_FAILURE:
        return {
          ...state,
          fetching: false,
          error: action.payload
        };
      case DELETE_NOTE_START:
        return {
          ...state,
          fetching: true
        };
      case DELETE_NOTE_SUCCESS:
        return {
          ...state,
          fetching: false,
          error: false,
          notes: action.payload
        };
      case DELETE_NOTE_FAILURE:
        return {
          ...state,
          fetching: false,
          error: action.payload
        };
      case EDIT_NOTE_START:
        return {
          ...state,
          fetching: true
        };
      case EDIT_NOTE_SUCCESS:
        return {
          ...state,
          fetching: false,
          error: false,
          notes: action.payload
        };
      case EDIT_NOTE_FAILURE:
        return {
          ...state,
          fetching: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default notesReducer;
  