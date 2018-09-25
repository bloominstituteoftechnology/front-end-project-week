// import actions here

import {
  FETCHING_NOTES,
  SUCCESS_FETCHING_NOTES,
  FAIL_FETCHING_NOTES,

  START_ADD_NOTE,
  SUCCESS_ADD_NOTE,
  FAILURE_ADD_NOTE,

  START_UPDATE_NOTE,
  SUCCESS_UPDATE_NOTE,
  FAILURE_UPDATE_NOTE

} from '../actions';

const initialState = {
  notes: [],
  fetchingNotes: false,
  addingNote: false,
  updatingNote: false,
  deletingNote: false,
  error: ''
}

export const notesReducer = (state = initialState, action) => {
  switch(action.type) {



  case FETCHING_NOTES:
    return {...state, fetchingNotes: true};

  case SUCCESS_FETCHING_NOTES:
    return {...state, fetchingNotes: false, notes: action.payload};

  case FAIL_FETCHING_NOTES:
    return {...state, fetchingNotes: false, error: action.payload};



  case START_ADD_NOTE:
    return {...state, addingNote: true};

  case SUCCESS_ADD_NOTE:
    return {...state, addingNote: false, notes: action.payload};

  case FAILURE_ADD_NOTE:
    return {...state, addingNote: false, error: action.payload};




    default:
      return state;
  }
}