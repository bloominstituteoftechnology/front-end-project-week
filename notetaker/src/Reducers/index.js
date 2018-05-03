import { FETCHING, FETCHED, ERROR, ADDED, DELETED, UPDATED } from '../Actions';

const initialState = {
    fetchingNotes: false,
    notesFetched: false,
    noteUpdated: false,
    noteDeleted: false,
    notes: [],
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
