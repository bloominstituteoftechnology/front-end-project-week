import * as actionTypes from "./../actions";

const initialState = {
  notes: [],
  fetchingNotes: false,
  fetchingNote: false,
  addingNote: false,
  deletingNote: false,
  updatingNote: false,
  error: null,
  note: {}
};
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING:
      return { ...state, fetchingNotes: true };

    case actionTypes.FETCHED:
      return { ...state, fetchingNotes: false, notes: action.payload };

    case actionTypes.FETCHING_SINGLE:
      return { ...state, fetchingNote: true };

    case actionTypes.FETCHED_SINGLE:
      return { ...state, fetchingNote: false, note: action.payload };

    case actionTypes.ADDING:
      return { ...state, addingNote: true };

    case actionTypes.ADDED:
      return { ...state, addingNote: false, note: action.payload };

    case actionTypes.UPDATING:
      return { ...state, updatingNote: true };
    case actionTypes.UPDATED:
      return { ...state, updatingNote: false, note: action.payload };
    case actionTypes.DELETING:
      return { ...state, deletingNote: true };
    case actionTypes.DELETED:
      return {
        ...state,
        deletingNote: false
      };

    case actionTypes.ERROR:
      return {
        ...state,
        error: action.payload,
        fetchingNotes: false,
        fetchingNote: false,
        addingNote: false,
        deletingNote: false,
        updatingNote: false
      };

    default:
      return state;
  }
};
