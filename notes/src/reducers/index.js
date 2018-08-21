//reducers

import { FETCHING_NOTES, NOTES_RECIEVED, ERROR, NOTE_ADDED, ADDING_NOTE, DELETING_NOTE, NOTE_DELETED } from '../actions';

const initialState = {
  notes: [],
  addingNote: false,
  noteAdded: false,
  fetchingNotes: false,
  notesRecieved: false,
  status: '',
  error: null,
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_NOTES:
      return Object.assign({}, state, {
        fetchingNotes: true,
      })
    case NOTES_RECIEVED:
      return Object.assign({}, state, {
        fetchingNotes: false,
        notesRecieved: true,
        notes: action.payload,
      })
    case ADDING_NOTE:
      return Object.assign({}, state, {
        addingNote: true,
      })
    case NOTE_ADDED:
      return Object.assign({}, state, {
        addingNote: false,
        noteAdded: true,
        status: action.payload,
      })
    case DELETING_NOTE:
      return Object.assign({}, state, {
        deletingNote: true,
      })
    case NOTE_DELETED:
      return Object.assign({}, state, {
        deletingNote: false,
        noteDeleted: true,
        status: action.payload,
      })
    case ERROR:
      return Object.assign({}, state, {
        fetchingNotes: false,
        notesRecieved: false,
        addingNote: false,
        noteAdded: false,
        error: true,
        status: action.payload,
      })
    default:
      return state;
  }
}
