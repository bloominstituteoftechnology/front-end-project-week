import * as actionTypes from '../actions';

const initialState = {
  notes: [],
  gettingNotes: false,
  addingNote: false,
  deletingNote: false,
  editingNote: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING_NOTES:
      return { ...state, gettingNotes: true };
    case actionTypes.GET_NOTES:
      return { ...state, notes: [...action.payload], gettingNotes: false };
    case actionTypes.ADDING_NOTE:
      return { ...state, addingNote: true };
    case actionTypes.ADD_NOTE:
      return { ...state, addingNote: false };
    case actionTypes.DELETING_NOTE:
      return { ...state, deletingNote: true };
    case actionTypes.DELETE_NOTE:
      return { ...state, deletingNote: false };
    case actionTypes.EDITING_NOTE:
      return { ...state, editingNote: true };
    case actionTypes.EDIT_NOTE:
      return {
        ...state,
        notes: state.notes.map(note => {
          if (note.id === action.id) {
            return action.payload;
          } else {
            return note;
          }
        }),
        editingNote: false
      };
    case actionTypes.ERROR:
      return {
        ...state,
        gettingNotes: false,
        addingNote: false,
        deletingNote: false,
        editingNote: false,
        error: action.payload
      };
    default:
      return state;
  }
}
