import * as actionTypes from '../actions';

const initialState = {
  noteSelected: null,
  showUpdate: false,
  deleteNote: false
}

export const singleNoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SINGLE_NOTE_SUCCESS:
      return { 
        ...state, 
        noteSelected: action.payload, 
        showUpdate: false };
    case actionTypes.TOGGLE_DELETE_NOTE:
      return { 
        ...state, 
        deleteNote: !state.deleteNote }
    case actionTypes.TOGGLE_UPDATE_NOTE:
      return { 
        ...state, 
        showUpdate: !state.noteSelected }
    case actionTypes.DELETE_NOTE_SUCCESS:
      return { 
        ...state,
        noteSelected: null }
    default:
      return state;
  }
}  