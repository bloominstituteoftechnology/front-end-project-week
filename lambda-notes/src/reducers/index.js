//import action types from ./actions
import { FETCHING, FETCHED, ADDING, ADDED } from "../actions";

const initialState = {
  notes: [
    {
      _id: 0,
      title: "My thoughts...",
      textBody:
        "This is a note about my thoughts during recent travel adventure"
    },
    {
      _id: 1,
      title: "Favorite quotes",
      textBody:
        "This note includes my favorite quotes from books, movies, songs, etc."
    }
  ],
  fetchingNotes: false,
  fetchedNotes: false,
  addingNote: false,
  addedNote: false,
  editingNote: false,
  editedNote: false,
  deletingNote: false,
  deletedNote: false
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetchingNotes: true };
    case FETCHED:
      return {
        ...state,
        notes: action.payload,
        fetchedNotes: true,
        fetchingNotes: false
      };

    default:
      return state;
  }
};

export default notesReducer;
