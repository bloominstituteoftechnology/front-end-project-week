import { FETCHING_NOTES, NOTES_FETCHED, FETCHING_SINGLE_NOTE, SINGLE_NOTE_FETCHED, SAVING_NOTES, NOTES_SAVED, DELETING_NOTE, NOTE_DELETED, UPDATING_NOTE, NOTE_UPDATED, REDIRECT_FORPUT, ERROR } from '../actions';

const initialState = {
  notes: [],
  note: {},
  fetchingNotes: false,
  notesFetched: false,
  fetchingSingleNote: false,
  singleNoteFetched: false,
  savingNotes: false,
  notesSaved: false,
  deletingNote: false,
  noteDeleted: false,
  updatingNote: false,
  noteUpdated: false,
  error: null,
  redirect: false,
}

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_NOTES:
      return Object.assign({}, state, { fetchingNotes: true })
    case NOTES_FETCHED:
      return Object.assign({}, state, { notes: action.payload, fetchingNotes: false, notesFetched: true, secondRedirect: false })
    case FETCHING_SINGLE_NOTE:
      return Object.assign({}, state, { fetchingSingleNote: true, redirect: false })
    case SINGLE_NOTE_FETCHED:
      return Object.assign({}, state, { note: action.payload, fetchingSingleNote: false, singleNoteFetched: true })
    case SAVING_NOTES:
      return Object.assign({}, state, { notesFetched: false, savingNotes: true });
    case NOTES_SAVED:
      return Object.assign({}, state, { notes: action.payload, savingNotes: false, notesSaved: true, redirect: true });
    case DELETING_NOTE:
      return Object.assign({}, state, { notesSaved: false, deletingNote: true });
    case NOTE_DELETED:
      return Object.assign({}, state, { notes: action.payload, deletingNote: false, noteDeleted: true });
    case UPDATING_NOTE:
      return Object.assign({}, state, { noteDeleted: false, updatingNote: true });
    case NOTE_UPDATED:
      return Object.assign({}, state, { notes: action.payload, updatingNote: false, noteUpdated: true })
    case REDIRECT_FORPUT:
      return Object.assign({}, state, { redirect: true })
    case ERROR:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
}
