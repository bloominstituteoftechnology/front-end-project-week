import * as actionTypes from '../actions/notesActions';

const initialState = {
  notes: [],
  gettingNotes: false,
  updatingNote: false,
  creatingNote: false,
  //deletingNote: false,
  error: null
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING_NOTES:
      return { ...state, gettingNotes: true };
    case actionTypes.GET_NOTES:
      return { ...state, notes: action.payload, gettingNotes: false };
    case actionTypes.UPDATING_NOTE:
      return { ...state, updatingNote: true };
    case actionTypes.UPDATE_NOTE:
      return { ...state, noteSelected: action.payload, updatingNote: false };
    case actionTypes.CREATING_NOTE:
      return { ...state, creatingNote: true };
    case actionTypes.CREATE_NOTE:
      return { ...state,  noteSelected: action.payload, creatingNote: false };
    case actionTypes.ERROR:
      return {
        ...state,
        gettingNotes: false,
        creatingNote: false,
        //deletingNote: false,
        updatingNote: false,
        error: action.payload
      };
    default:
      return state;
  }
};