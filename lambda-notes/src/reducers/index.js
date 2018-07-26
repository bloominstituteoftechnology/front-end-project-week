import {
  GETTING_NOTES,
  GOT_NOTES,
  ERROR,
  ADDING_NOTE,
  ADDED_NOTE,
  DELETING_NOTE,
  UPDATING_NOTE
} from '../actions';

const initialState = {
  notes: [],
  gettingNotes: false,
  gotNotes: false,
  selectedNote: {},
  addingNote: false,
  addedNote: false,
  updatingNote: false,
  updatedNote: false,
  deletingNote: false,
  deletedNote: false,
  error: null
};

export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_NOTES:
      return { ...state, gettingNotes: true };
    case GOT_NOTES:
      return {
        ...state,
        gettingNotes: false,
        notes: action.payload,
        error: null
      };
    case ADDING_NOTE:
      return { ...state, addingNote: true };
    // case ADDED_NOTE:
    //   return { ...state, notes: action.payload, addingNote: false };
    case DELETING_NOTE:
      return { ...state, deletingNote: true };
    case UPDATING_NOTE:
      return { ...state, updatingNote: true };
    case ERROR:
      return { ...state, error: action.message };
    default:
      return state;
  }
};
