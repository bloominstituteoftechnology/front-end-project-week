import {
    NOTES_FETCH_START,
    NOTES_FETCH_COMPLETE,
    NOTES_FETCH_FAILURE,
    ADD_NOTE_START,
    ADD_NOTE_COMPLETE,
    ADD_NOTE_FAILURE
  } from "../actions";
  
  const initialState = {
    addingNote: false,
    notes: [],
    isLoading: false,
    error: ""
  };
  
  export const noteReducer = (state = initialState, action) => {
    switch (action.type) {
      case NOTES_FETCH_START:
        return { ...state, isLoading: true };
      case NOTES_FETCH_COMPLETE:
        return { ...state, isLoading: false, notes: action.payload };
      case NOTES_FETCH_FAILURE:
        console.log(action.payload);
        return { ...state, isLoading: false, error: action.payload };
      // case ADD_NOTE_START:
      //   return { ...state, addingNote: true };
      // case ADD_NOTE_COMPLETE:
      //   return { ...state, addingNote: false, notes: action.payload };
      // case ADD_NOTE_FAILURE:
      //   console.log(action.payload);
      //   return { ...state, addingNote: false, error: action.payload };
      default:
        return state;
    }
  };
  