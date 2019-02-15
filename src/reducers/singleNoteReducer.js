import * as actionTypes from '../actions/notesActions';

const initialState = {
  noteSelected: {},
  showUpdate: false,
  deletingNote: false,
  gettingSingleNote: false,
};

export const singleNoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETING_NOTE:
      return { ...state, deletingNote: true };
    case actionTypes.DELETE_NOTE:
      return { ...state, noteSelected: action.payload, deletingNote: false };
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
    case actionTypes.ERROR:
      return {
        ...state,
        deletingNote: false,
        error: action.payload
      };
    default:
      return state;
  }
};