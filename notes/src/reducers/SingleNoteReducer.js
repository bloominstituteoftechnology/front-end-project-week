// import {
//   TOGGLE_UPDATE_NOTE,
//   SINGLE_NOTE,
//   UPDATE_FRIEND_SUCCESS,
// } from '../actions';

import * as actionTypes from '../actions';

const initialState = {
  noteSelected: {},
  showUpdate: false
}

export const singleNoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SINGLE_NOTE:
      return { 
        ...state, 
        noteSelected: action.payload, 
        showUpdate: false };
    case actionTypes.TOGGLE_UPDATE_NOTE:
      return { 
        ...state, 
        noteSelected: !state.noteSelected }
    default:
      return state;
  }
}