import { FETCHING, FETCHED, FETCHNOTE, NOTEFETCHED, ERROR, ADDED, DELETED, UPDATED } from '../Actions';

const initialState = {
    fetchingNotes: false,
    notesFetched: false,
    fetchingNote: false,
    noteFetched: false,
    noteUpdated: false,
    noteDeleted: false,
    notes: [],
    note: {},
    error: null
}


export const notesReducer = (state=initialState, action) => {
  switch(action.type) {
    case FETCHING:
      return {...state, fetchingNotes: true}
    case FETCHED:
      return {...state, fetchingNotes: false, notesFetched: true, notes: state.notes.concat(action.notes)}
    case ERROR:
      return {...state, fetchingNotes: false, error: action.error}
    case FETCHNOTE:
      return {...state, fetchingNote: true }
    case NOTEFETCHED:
      return {...state, noteFetched: true, fetchingNote: false, note: action.note}
    case ADDED:
      return {...state, notes: [...action.notes]}
    case DELETED:
      return {...state, notes: [...action.notes]}
    case UPDATED:
      return {...state, notes: [...action.notes]}
    default: 
      return state;
    }
}
