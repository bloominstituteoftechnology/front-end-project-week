import { FETCHING_NOTES, NOTES_FETCHED, FETCH_ERROR, ADDING_NOTE, NOTE_ADDED, DELETING_NOTE, NOTE_DELETED, EDITING_NOTE, NOTE_EDITED } from '../actions';

const initialState = {
   notes: [],
   fetchingNotes: false,
   addingNote: false,
   updatingNote: false,
   deletingNote: false,
   error: null
}

export const noteReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_NOTES:
      return Object.assign({}, state, {fetchingNotes:true});
    case NOTES_FETCHED:
      return Object.assign({}, state, {
        notes: [...state.notes, ...action.payload],
        fetchingNotes: false
      });
    case FETCH_ERROR:
      return Object.assign({}, state, {
        fetchingNotes: false,
        error: "Error fetching notes"
      });
    case ADDING_NOTE:
      return {...state, addingNote: true };
    case NOTE_ADDED:
      return {...state, addingNote: false, notes: action.payload };
    case DELETING_NOTE:
      return {...state, deletingNote: true };
    case NOTE_DELETED:
      return {...state, deletingNote: false, notes: action.payload };
    case EDITING_NOTE:
      return {...state, updatingNote: true};
    case NOTE_EDITED:
      return {...state, updatingNote: false, notes: action.payload }
    default:
      return state;
  }
}