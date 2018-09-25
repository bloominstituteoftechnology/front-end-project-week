import * as actionTypes from '../actions';

const initialState = {
    notes: [],
    gettingNotes: false,
    gotNotes: false,
    postingNote: false,
    postedNote: false,
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
          notes: action.payload,
        };
      case actionTypes.ERROR:
        return {
          ...state,
          gettingNotes: false,
          gotNotes: false,
          postingNote: false,
          postedNote: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default notesReducer;