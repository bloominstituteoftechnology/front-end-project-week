import { FETCHING_NOTES, NOTES_FETCHED, FETCH_ERROR, ADDING_NOTE, NOTE_ADDED, DELETING_NOTE, NOTE_DELETED, EDITING_NOTE, NOTE_EDITED, NOTES_UPDATED, SORTING_NOTES, NOTES_SORTED } from '../actions';

const initialState = {
   notes: [],
   fetchingNotes: false,
   addingNote: false,
   updatingNote: false,
   deletingNote: false,
   error: null,
   notesNeedsUpdate: true,
   sortingNotes: false
}

export const noteReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_NOTES:
      return Object.assign({}, state, {fetchingNotes:true});
    case NOTES_FETCHED:
      return Object.assign({}, state, {
        notes: action.payload,
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
      return {...state, addingNote: false, notesNeedsUpdate: true };
    case DELETING_NOTE:
      return {...state, deletingNote: true };
    case NOTE_DELETED:
      return {...state, deletingNote: false, notesNeedsUpdate: true };
    case EDITING_NOTE:
      return {...state, updatingNote: true };
    case NOTE_EDITED:
      return {...state, updatingNote: false, notesNeedsUpdate: true };
    case NOTES_UPDATED:
      return {...state, notesNeedsUpdate: false };
    case SORTING_NOTES:
      return {...state, sortingNotes: true };
    case NOTES_SORTED:
      return {...state, sortingNotes: false, notes: action.payload };
    default:
      return state;
  }
}