import {
  FETCHING_NOTES,
  NOTES_FETCHED,
  NOTES_SAVED,
  SAVING_NOTES,
  UPDATING_NOTE,
  NOTE_UPDATED,
  DELETING_NOTE,
  NOTE_DELETED,
  NOTES,
  ERROR
} from '../actions'


const initState = {
  fetchingNotes: false,
  notesFetched: false,
  notesSaved: false,
  savingNotes: false,
  updatingNote: false,
  noteUpdated: false,
  deletingNote: false,
  noteDeleted: false,
  notes: [],
  error: null,
}

export const notesReducer = (state = initState, action) => {
  switch(action.type) {
    case FETCHING_NOTES:
      return {
        ...state,
        fetchingNotes: true
      }
    case NOTES_FETCHED:
      return {
        ...state,
        fetchingNotes: false,
        notes: action.payload,
        notesFetched: true
      }
    case NOTES_SAVED:
      return {
        ...state,
        savingNotes: false,
        notesSaved: true,
        Notes: action.payload
      }
    case SAVING_NOTES:
      return {
        ...state,
        savingNotes: true,
      }
    case UPDATING_NOTE:
      return {
        ...state

      }
    case NOTE_UPDATED:
      return {
        ...state

      }
    case DELETING_NOTE:
      return {
        ...state,
        deletingNote: true

      }
    case NOTE_DELETED:
      return {
        ...state,
        deletingNote: false,
        Notes: action.payload

      }
    case NOTES:
      return {
        ...state

      }
    case ERROR:
      return {
        ...state,
        fetchingNotes: false,
        error: action.payload
     }
     default: return state;
  }
}
