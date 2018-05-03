import {LOADING, LOADED, CREATE, SINGLE_NOTE } from '../actions';

const initialState = {
  notes: [],
  singleNote: {},
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
      case SINGLE_NOTE:
      return { ...state, singleNote: action.payload, showUpdate: false };
    default:
      return state; 
  }
}