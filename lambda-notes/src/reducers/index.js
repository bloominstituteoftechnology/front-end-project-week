import { FETCHING_DATA, DATA_FETCHED, ERROR, ADD_NOTE, NOTE_ADDED, DELETE_NOTE, NOTE_DELETED, EDIT_NOTE, NOTE_EDITED, FETCHING_NOTE, NOTE_FETCHED } from '../actions';

 const initialState = {
   notes: [],
   note: {},
   fetchingData: false,
   dataFetched: false,
   fetchingNote: false,
   noteFetched: false,
   addingNote: false,
   noteAdded: false,
   updatingNote: false,
   noteUpdated: false,
   deletingNote: false,
   noteDeleted: false,
   error: null
 }

const notesReducer = ( state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return Object.assign({}, state, {
        fetchingData: true
      });
    case DATA_FETCHED:
      return Object.assign({}, state, {
        fetchingData: false,
        dataFetched: true,
        notes: action.payload
      });
    case ERROR:
      return Object.assign({}, state, {
        fetchingData: false,
        error: true
      });
      case FETCHING_NOTE:
      return Object.assign({}, state, {
        fetchingNote: true
      });
    case NOTE_FETCHED:
      return Object.assign({}, state, {
        fetchingNote: false,
        noteFetched: true,
        note: action.payload
      });
      case ADD_NOTE:
      return Object.assign({}, state, {
        addingNote: true
      });
      case NOTE_ADDED:
      return Object.assign({}, state, {
        addingNote: false,
        noteAdded: true,
        notes: [...state.notes, action.payload]
      });
      case DELETE_NOTE:
      return Object.assign({}, state, {
        deletingNote: true
      });
      case NOTE_DELETED:
      return Object.assign({}, state, {
        deletingNote: false,
        noteDeleted: true,
        notes: action.payload
      });
      case EDIT_NOTE:
      return Object.assign({}, state, {
        updatingNote: true
      });
      case NOTE_EDITED:
      return Object.assign({}, state, {
        updatingNote: false,
        noteUpdated: true,
        notes: action.payload
      });
    default:
      return state;
  }
}

export default notesReducer;