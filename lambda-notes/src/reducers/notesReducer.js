import * as actionTypes from "../actions";

const initialState = {
  notes: [],
  gettingNotes: false,
  gotNotes: false,
  postingNote: false,
  postedNote: false,
  updatingNote: false,
  updatedNote: false,
  deletingNote: false,
  deletedNote: false,
  setUpdateNote: false,
  noteToUpdate: null,
  error: false
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING_NOTES:
      return { ...state, gettingNotes: true };
    case actionTypes.GET_NOTES:
      return {
        ...state,
        gettingNotes: false,
        gotNotes: true,
        notes: action.payload
      };
    case actionTypes.POSTING_NOTES:
      return { ...state, postingNote: true };
    case actionTypes.POST_NOTE:
      return {
        ...state,
        postedNote: true,
        postingNote: false,
        notes: action.payload
      };
    case actionTypes.DELETING_NOTE:
      return { ...state, deletingNote: true };
    case actionTypes.DELETE_NOTE:
      return {
        ...state,
        deletingNote: false,
        deletedNote: true,
        notes: action.payload
      };
    case actionTypes.SET_UPDATE_NOTE:
      const note = state.note.find(note => note.id === action.payload);
      return { ...state, noteToUpdate: note ? note : null };
    case actionTypes.UPDATE_NOTE_START:
      return { ...state, updatingNote: true };
    case actionTypes.UPDATE_NOTE_COMPLETE:
      return {
        ...state,
        updatingNote: false,
        updatedNote: true,
        friends: action.payload
      };
    case actionTypes.ERROR:
      return {
        ...state,
        gettingNotes: false,
        gotNotes: false,
        postingNote: false,
        postedNote: false,
        updatingNote: false,
        updatedNote: false,
        deletingNote: false,
        deletedNote: false,
        setUpdateNote: false,
        noteToUpdate: null,
        error: action.payload
      };
    default:
      return state;
  }
};
