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
        return { ...state, fetchingData: true };
  
      case NOTES_FETCH_COMPLETE:
        return {
          ...state,
          notes: action.payload,
          fetchingData: false,
          dataFetched: true
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
          note: action.payload
        };
      case SET_UPDATE_NOTE:
        const note = state.notes.find(note => note._id === action.payload);
        return { ...state, noteToUpdate: note ? note : null };
      default:
        return state;
    }
  };