import {
  GETTING_NOTES,
  NOTES_GOT,
  FAILURE,
  ADDING_NOTE,
  NOTE_ADDED,
  NOTE_DELETED,
  DELETING_NOTE,
  EDITING_NOTE,
  NOTE_EDITED,
  TOGGLE_DELETED,
  TOGGLE_ADDED
} from "../actions";

const initialState = {
  notes: [],
  currentNote: {},
  gettingNotes: false,
  notesGot: false,
  error: null,
  addingNote: false,
  noteAdded:false,
  deletingNote:false,
  noteDeleted:false,
  editingNote:false,
  noteEdited:false
};

const lambdaReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GETTING_NOTES:
      return { ...state, gettingNotes: true };
    case NOTES_GOT:
      return { ...state, gettingNotes: false, notesGot: true, notes: payload };
    case FAILURE:
      return { ...state, gettingNotes: false, notesGot: false, error: payload };
    case ADDING_NOTE:
      return { ...state, addingNote: true };
    case NOTE_ADDED:
      return { ...state, addingNote: false, noteAdded:true, notes: [...state.notes, payload] };
      case DELETING_NOTE:
      return {...state, deletingNote:true}
    case NOTE_DELETED:
    return {...state, noteDeleted:true, deletingNote:false}
    case EDITING_NOTE:
    return {...state, editingNote:true}
    case NOTE_EDITED:
    return{...state, editingNote:false, noteEdited:true}
    case TOGGLE_DELETED:
    return {...state, noteDeleted:false}
    case TOGGLE_ADDED:
    return {...state, noteAdded:false}
      default:
      return state;
  }
};

export default lambdaReducer;
