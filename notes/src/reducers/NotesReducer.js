// import {
//   FETCH_NOTES, 
//   FETCH_NOTES_SUCCESS, 
//   ADD_NOTE_SUCCESS,
//   DELETE_NOTE_SUCCESS,
//   UPDATE_FRIEND_SUCCESS,
//   TOGGLE_UPDATE_NOTE,
//   SINGLE_NOTE,
//   ERROR
// } from '../actions';

import * as actionTypes from '../actions';

const initialState = {
  fetching: false,
  notes: [],
  error: null
}

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_NOTES:
      return { ...state, fetching: true };
    case actionTypes.FETCH_NOTES_SUCCESS:
      return {
        ...state,
        notes: [...action.payload],
        fetching: false
      };
    case actionTypes.ADD_NOTE_SUCCESS:
      return {
        ...state,
        notes: [...action.payload],
      };
    case actionTypes.DELETE_NOTE_SUCCESS:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload)
      }
    case actionTypes.ERROR:
      return { 
        ...state, 
        fetching: false, 
        error: action.payload }
    default:
      return state;
  }
}