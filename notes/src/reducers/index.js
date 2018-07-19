import {FETCHING, FETCHED, SAVING, SAVED, UPDATING, UPDATED, DELETING, DELETED, ERROR};

const initialState = {
  notes: [],
  fetchingNotes: false,
  notesFetched: false,
  savingNote: false,
  noteSaved: false,
  deletingNote: false,
  noteDeleted: false,
  updatingNote: false,
  noteUpdated: false,
  error: null
}

const noteReducuer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING:
      return Object.assign({}, state, {fetchingNotes: true})
    case FETCHED:
      return Object.assign({}, state, {notesFetched: true, notes:action.payload, fetchingNotes; false})
    case SAVING:
      return Object.assign({}, state, {savingNote: true})
    case SAVED:
      return Object.assign({}, state, {noteSaved: true, savingNote: false})
    case UPDATING:
      return Object.assign({}, state, {updatingNote: true})
    case UPDATED:
      return Object.assign({}, state, {noteUpdated: true, updatingNote: false, notes: action.payload})
    case DELETING:
      return Object.assign({}, state, {deletingNote: true})
    case DELETED:
      return Object.assign({}, state, {noteDeleted: true, deletingNote: false, notes: action.payload})
    case ERROR:
      return Object.assign({}, state, {fetchingNotes: false, error: action.payload})
    default:
      return state;
  }
};

export default noteReducuer;
