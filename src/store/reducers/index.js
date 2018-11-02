import {
  NOTES_FETCH_START,
  NOTES_FETCH_COMPLETE,
  NOTES_FETCH_ERROR,
  ADD_NOTE_START,
  ADD_NOTE_COMPLETE,
  ADD_NOTE_ERROR,
  VIEW_NOTE_START,
  VIEW_NOTE_COMPLETED,
  SET_UPDATE_NOTE
} from "../actions";

const initialState = {
  notes: [],
  fetchingData: false,
  dataFetched: false,
  addingNote: false,
  updatingNote: false,
  error: "",
  noteToUpdate: null,
  note: []
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTES_FETCH_START:
      return {
        ...state,
        fetchingData: true
      };

    case NOTES_FETCH_COMPLETE:
      console.log("should be false");
      return {
        ...state,
        notes: action.payload,
        fetchingData: false,
        dataFetched: true,
        updatingNote: false,
        noteToUpdate: null
      };

    case NOTES_FETCH_ERROR:
      return { ...state, error: "Error fetching data" };

    case ADD_NOTE_START:
      return { ...state, addingNote: true };

    case ADD_NOTE_COMPLETE:
      return { ...state, addingNote: false, note: action.payload };

    case ADD_NOTE_ERROR:
      return { ...state, error: "Error adding note", addingNote: false };

    case VIEW_NOTE_START:
      return {
        ...state,
        viewingNote: true
      };
    case VIEW_NOTE_COMPLETED:
      return {
        ...state,
        viewingNote: false,
        note: action.payload,
        updatingNote: true
      };
    case SET_UPDATE_NOTE:
      console.log("should be true");
      const note = state.notes.find(note => note.id === action.payload);
      return { ...state, noteToUpdate: note ? note : null };
    default:
      return state;
  }
};
