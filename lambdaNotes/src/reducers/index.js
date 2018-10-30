/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   Notes: [],
   fetchingNotes: false
   addingNote: false
   updatingNote: false
   deletingNote: false
   error: null
 }
*/

/*
  You'll only need one Note reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

import {
  FETCHING_REQUEST,
  FETCHING_SUCCESS,
  FETCHING_FAILURE,
  ADDING,
  ADDING_SUCCESS,
  ADDING_FAILURE,
  DELETING,
  DELETING_SUCCESS,
  DELETING_FAILURE
} from "../actions";

const initialState = {
  fetching: false,
  notes: [],
  error: null,
  newId : '',
};

export const NoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_REQUEST:
      return { ...state, fetching: true };

    case FETCHING_SUCCESS:
      console.log("fetching success", action.payload);
      return { ...state, fetching: false, notes: [...action.payload] };

    case FETCHING_FAILURE:
      return { ...state, fetching: false, error: action.payload };

    case DELETING:
      return { ...state, fetching: true };

    case DELETING_SUCCESS:
    // API doesn't return anything.  so using ID in payload, delete a note with that ID first.
     let newNoteList = state.notes.filter( note => note._id !== action.payload);
      return { ...state, fetching: false, notes : [...newNoteList] };

    case DELETING_FAILURE:
      return { ...state, fetching: false, error: action.payload };

    case ADDING:
      return { ...state, fetching: true };

    case ADDING_SUCCESS:
    // API only returns a new ID for new note.  reducer combine id with new note and 
    // return a complete note object as payload
          return { ...state, fetching: false, notes: [...state.notes, action.payload] };

    case ADDING_FAILURE:
      return { ...state, fetching: false, error: action.payload };

    default:
      return state;
  }
};
