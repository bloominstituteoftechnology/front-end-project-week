import {
    NOTES_FETCH_START,
    NOTES_FETCH_COMPLETE,
    NOTES_FETCH_FAILURE,

    ADD_NOTE_START,
    ADD_NOTE_COMPLETE,
    ADD_NOTE_FAILURE,
    
    NOTE_GET_START,
    NOTE_GET_COMPLETE,
    NOTE_GET_FAILURE,
    
    NOTE_EDIT_START,
    NOTE_EDIT_COMPLETE,
    NOTE_EDIT_FAILURE,

    DELETE_NOTE_START,
    DELETE_NOTE_COMPLETE,
    DELETE_NOTE_FAILURE,
  } from "../actions";
  
  const initialState = {
    notes: [],
    isGettingNoteList: false,
    isAdding: false,
    isGettingNote:false,
    isDeleting: false,
    isEditing: false,
    note:{},
    id: null,
    error: "",
    actionTookPlace: false
  };
  
  export const noteReducer = (state = initialState, action) => {
    switch (action.type) {
      case NOTES_FETCH_START:
        return { ...state, isGettingNoteList: true };
      case NOTES_FETCH_COMPLETE:
        return { ...state, isGettingNoteList: false, notes: action.payload, actionTookPlace: false};
      case NOTES_FETCH_FAILURE:
        console.log(action.payload);
        return { ...state, isGettingNoteList: false, error: action.payload };

      case ADD_NOTE_START:
        return { ...state, isAdding: true };
      case ADD_NOTE_COMPLETE:
        return { ...state, isAdding: false, actionTookPlace: true};
      case ADD_NOTE_FAILURE:
        console.log(action.payload);
        return { ...state, isAdding: false, error: action.payload };

      case NOTE_GET_START:
        return { ...state, isGettingNote: true };
      case NOTE_GET_COMPLETE:
        return { ...state, isGettingNote: false, note: action.payload};
      case NOTE_GET_FAILURE:
        console.log(action.payload);
        return { ...state, isGettingNote: false, error: action.payload };

      case NOTE_EDIT_START:
        return { ...state, isEditting: true };
      case NOTE_EDIT_COMPLETE:
        return { ...state, isEditting: false, note: action.payload, actionTookPlace: true };
      case NOTE_EDIT_FAILURE:
        console.log(action.payload);
        return { ...state, isEditting: false, error: action.payload };

      case DELETE_NOTE_START:
        return { ...state, isDeleting: true };
      case DELETE_NOTE_COMPLETE:
        return { ...state, isDeleting: false, actionTookPlace: true};
      case DELETE_NOTE_FAILURE:
        console.log(action.payload);
        return { ...state, isDeleting: false, error: action.payload };
        
      default:
        return state;
    }
  };
  