import {
  USER_REGISTERED,
  USER_AUTHENTICATED,
  USER_UNAUTHENTICATED,
  FETCHING_NOTES,
  NOTES_FETCHED,
  ADDING_NOTE,
  NOTE_ADDED,
  UPDATING_NOTE,
  NOTE_UPDATED,
  DELETING_NOTE,
  NOTE_DELETED,
  ERROR
} from '../actions';

let _id = -1;

const initialState = {
  notes: [],
  id: _id,
  signedUp: false,
  loggedIn: false,
  loggedOut: false,
  gettingNotes: false,
  notesReceived: false,
  addingNote: false,
  noteAdded: false,
  updatingNote: false,
  noteUpdated: false,
  deletingNote: false,
  noteDeleted: false,
  error: null
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTERED:
      return { ...state, signedUp: true };
    case USER_AUTHENTICATED:
      return { ...state, loggedIn: true };
    case USER_UNAUTHENTICATED:
      return { ...state, loggedIn: false, loggedOut: true };
    case FETCHING_NOTES:
      return { ...state, gettingNotes: true };
    case NOTES_FETCHED:
      return {
        ...state,
        gettingNotes: false,
        notesReceived: true,
        notes: [...state.notes, ...action.payload]
      };
    case ADDING_NOTE:
      return { ...state, addingNote: true };
    case NOTE_ADDED:
      return {
        ...state,
        notes: [...state.notes, action.payload],
        addingNote: false,
        noteAdded: true
      };
    case UPDATING_NOTE:
      return { ...state, updatingNote: true };
    case NOTE_UPDATED:
      return {
        ...state,
        updatingNote: false,
        noteUpdated: true,
        notes: [...state.notes].map(note => {
          if (note._id === action.payload._id) {
            return action.payload;
          } else {
            return note;
          }
        })
      };
    case DELETING_NOTE:
      return { ...state, deletingNote: true };
    case NOTE_DELETED:
      return {
        ...state,
        deletingNote: false,
        noteDeleted: true,
        notes: [...state.notes].filter(note => note._id !== action.payload)
      };
    case ERROR:
      return {
        ...state,
        gettingNotes: false,
        addingNote: false,
        updatingNote: false,
        deletingNote: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default noteReducer;

