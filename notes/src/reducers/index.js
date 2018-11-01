import * as actionTypes from '../actions';

const initialState = {
    notes: [],
    gettingNotes: false,
    gotNotes: false,
    postingNote: false,
    postedNote: false,
    deletingNote: false,
    deletedNote: false,
    updatingNote: false,
    updatedNote: false,
    error: null,
};

const notesReducer = (state = initialState, action) => {
    switch(action.type) {
      case actionTypes.GETTING_NOTES:
        return { ...state, gettingNotes: true };
      case actionTypes.GET_NOTES:
        return {
          ...state,
          gettingNotes: false,
          gotNotes: true,
          notes: action.payload,
        };
      case actionTypes.POSTING_NOTE:
        return { ...state, postingNote: true};
      case actionTypes.POST_NOTE:
        return {
          ...state,
          postedNote: true,
          postingNote: false,
          // notes: action.payload,
        };
      case actionTypes.DELETING_NOTE:
        return {
          ...state,
          deletingNote: true,
        };
      case actionTypes.DELETE_NOTE:
        return {
          ...state,
          deletingNote: false,
          deletedNote: true,
        };
      case actionTypes.UPDATING_NOTE:
        return {
          ...state,
          UpdatingNote: true,
        };
      case actionTypes.UPDATE_NOTE:
        return {
          ...state,
          updatingNote: false,
          updatedNote: true,
        };
      case actionTypes.ERROR:
        return {
          ...state,
          gettingNotes: false,
          gotNotes: false,
          postingNote: false,
          postedNote: false,
          deletingNote: false,
          deletedNote: false,
          updatingNote: false,
          updatedNote: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default notesReducer;