// import actions here

import {
  FETCHING_NOTES,
  SUCCESS_FETCHING_NOTES,
  FAIL_FETCHING_NOTES,


  START_ADD_NOTE,
  SUCCESS_ADD_NOTE,
  FAILURE_ADD_NOTE,  


  START_DELETE_NOTE,
  SUCCESS_DELETE_NOTE,
  FAILURE_DELETE_NOTE,


  SET_UPDATE_NOTE,


  START_UPDATE_NOTE,
  SUCCESS_UPDATE_NOTE,
  FAILURE_UPDATE_NOTE,



} from '../actions';

const initialState = {
  notes: [],
  fetchingNotes: false,
  addingNote: false,
  noteToUpdate: null, // noteToUpdate
  deletingNote: false, // isDeleting in lecture
  error: '',
  isUpdating: false,
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
    return {...state, addingNote: false, notes: [...state.notes, action.payload]};

  case FAILURE_ADD_NOTE:
    return {...state, addingNote: false, error: action.payload};






  case START_DELETE_NOTE:
    return {...state, deletingNote: true };

  case SUCCESS_DELETE_NOTE:
    let indexDelete = state.notes.findIndex(note => {      
      return note._id === action.payload
    })

    let newNotesDelete = [
      ...state.notes.slice(0, indexDelete),      
      ...state.notes.slice(indexDelete + 1)
    ]

    return {...state, deletingNote: false, notes: newNotesDelete };

  case FAILURE_DELETE_NOTE:
    console.log(action.payload)
    return {...state, deletingNote: false, error: action.payload  };




  case SET_UPDATE_NOTE:
    const note = state.notes.find(note => note._id === action.payload);
    return {...state, noteToUpdate: note ? note : null }




  case START_UPDATE_NOTE:
    return {...state, isUpdating: true };

  case SUCCESS_UPDATE_NOTE:    
    let index = state.notes.findIndex(note => {      
      return note._id === action.payload._id
    })

    let newNotes = [
      ...state.notes.slice(0, index),
      action.payload,
      ...state.notes.slice(index + 1)
    ]

    return {...state, isUpdating: false, notes: newNotes };

  case FAILURE_UPDATE_NOTE:
    console.log(action.payload)
    return {...state, isUpdating: false, error: action.payload  };


    default:
      return state;
  }
}