import * as actionTypes from '../actions';

const initialState = {
  noteSelected: {},
  showUpdate: false,
  gettingSingleNote: false,
};

export const singleNoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SINGLE_NOTE:
      return { ...state, noteSelected: action.payload, gettingSingleNote: false, showUpdate: false };
    case actionTypes.GETTING_SINGLE_NOTE:
      return { ...state, gettingSingleNote: true };
    case actionTypes.TOGGLE_UPDATE_NOTE:
      return { ...state, showUpdate: !state.showUpdate };
      case actionTypes.UPDATING_NOTE:
      return { ...state, updatingNote: true };
    case actionTypes.UPDATE_NOTE:
      return { ...state, notes: action.payload, updatingNote: false };
      default:
      return state;
  }
};