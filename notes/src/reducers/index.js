import * as act from "../actions";
// import { newSort, local } from "../actions";
// import Fuse from "fuse.js";

const initialState = {
  fetchingNotes: false,
  fetchSingle: false,
  savingNote: false,
  updatingNote: false,
  deletingNote: false,
  isDragging: false,
  notes: [],
  note: [],
  filtered: [],
  error: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case act.FETCHING:
      return { ...state, fetchingNotes: true };
    case act.FETCHED:
      return {
        ...state,
        fetchingNotes: false,
        notes: action.payload,
        filtered: []
      };
    case act.SAVING:
      return { ...state, savingNote: true };
    case act.SAVED:
      let saved = [...state, action.payload];
      // localStorage.setItem("state", JSON.stringify(saved));
      return {
        ...state,
        savingNote: false,
        notes: [...saved],
        filtered: []
      };
    case act.DELETING:
      return { ...state, deletingNote: true };
    case act.DELETED:
      const deleted = state.notes.filter(note => note._id !== action.payload);
      // localStorage.setItem("state", JSON.stringify(deleted));
      return {
        ...state,
        deletingNote: false,
        notes: deleted,
        filtered: []
      };
    case act.SINGLE_FETCHING:
      return { ...state, fetchingSingle: true };
    case act.SINGLE_FETCHED:
      return {
        ...state,
        fetchingSingle: false,
        note: action.payload,
        filtered: []
      };
    case act.UPDATING:
      return { ...state, updatingNote: true };
    case act.UPDATED:
      const updated = state.notes.map(note => {
        if (note._id === action.payload._id) {
          return action.payload;
        }
        return note;
      });
      // localStorage.setItem("state", JSON.stringify(updated));
      return { ...state, notes: updated };
    // case act.FILTER:
    //   const options = {
    //     threshold: 0.5,
    //     location: 0,
    //     distance: 100,
    //     maxPatternLength: 32,
    //     minMatchCharLength: 0,
    //     keys: ["title", "textBody"]
    //   };
    //   const fuse = new Fuse(state.notes, options);
    //   const result = fuse.search(action.payload);
    //   return { ...state, filtered: [...result] };
    case act.ERROR:
      return {
        ...state,
        fetchingNotes: false,
        fetchSingle: false,
        savingNote: false,
        updatingNote: false,
        deletingNote: false,
        error: action.payload
      };
    // case act.DRAGGING:
    //   return { ...state, isDragging: true };
    // case act.DROPPED:
    //   return { ...state, notes: [...action.payload] };
    default:
      return state;
  }
};

export default rootReducer;
