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
  FAILURE_UPDATE_NOTE,


  START_DELETE_NOTE,
  SUCCESS_DELETE_NOTE,
  FAILURE_DELETE_NOTE,

  SET_UPDATE_NOTE

} from '../actions';

const initialState = {
  notes: [],
  fetchingNotes: false,
  addingNote: false,
  noteToUpdate: null, // noteToUpdate
  deletingNote: false, // isDeleting in lecture
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






  case START_DELETE_NOTE:
    return {...state, deletingNote: true };

  case SUCCESS_DELETE_NOTE:
    return {...state, deletingNote: false, notes: action.payload };

  case FAILURE_DELETE_NOTE:
    console.log(action.payload)
    return {...state, deletingNote: false, error: action.payload  };


  case SET_UPDATE_NOTE:
    const note = state.notes.find(note => note._id === action.payload);
    return {...state, noteToUpdate: note ? note : null }


    default:
      return state;
  }
}