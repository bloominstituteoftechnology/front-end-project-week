// import {
//   TOGGLE_UPDATE_NOTE,
//   SINGLE_NOTE,
//   UPDATE_FRIEND_SUCCESS,
// } from '../actions';

import * as actionTypes from '../actions';

const initialState = {
  noteSelected: null,
  showUpdate: false
}

export const singleNoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SINGLE_NOTE_SUCCESS:
      return { 
        ...state, 
        noteSelected: action.payload, 
        showUpdate: false };
    case actionTypes.TOGGLE_UPDATE_NOTE:
      return { 
        ...state, 
        showUpdate: !state.noteSelected }
    default:
      return state;
  }
}