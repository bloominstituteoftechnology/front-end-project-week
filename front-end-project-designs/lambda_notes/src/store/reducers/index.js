import {
    NOTES_FETCH_START,
    NOTES_FETCH_COMPLETE,
    NOTES_FETCH_FAILURE,
    ADD_NOTE_START,
    ADD_NOTE_COMPLETE,
    ADD_NOTE_FAILURE,
    NOTE_GET_START,
    NOTE_GET_COMPLETE,
    NOTE_GET_FAILURE
  } from "../actions";
  
  const initialState = {
    notes: [],
    isGettingNoteList: false,
    isAdding: false,
    isGettingNote:false,
    isDeleting: false,
    isEditing: false,
    note:{},
    error: ""
  };
  
  export const noteReducer = (state = initialState, action) => {
    switch (action.type) {
      case NOTES_FETCH_START:
        return { ...state, isGettingNoteList: true };
      case NOTES_FETCH_COMPLETE:
        return { ...state, isGettingNoteList: false, notes: action.payload };
      case NOTES_FETCH_FAILURE:
        console.log(action.payload);
        return { ...state, isGettingNoteList: false, error: action.payload };

      case ADD_NOTE_START:
        return { ...state, isAdding: true };
      case ADD_NOTE_COMPLETE:
        return { ...state, isAdding: false, notes: action.payload };
      case ADD_NOTE_FAILURE:
        console.log(action.payload);
        return { ...state, isAdding: false, error: action.payload };

      case NOTE_GET_START:
        return { ...state, isGettingNote: true };
      case NOTE_GET_COMPLETE:
        return { ...state, isGettingNote: false, note: action.payload };
      case NOTE_GET_FAILURE:
        console.log(action.payload);
        return { ...state, isGettingNote: false, error: action.payload };
        
      default:
        return state;
    }
  };
  