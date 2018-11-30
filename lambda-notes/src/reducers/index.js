import {
  FETCHING,
  FETCHING_NOTE,
  GET_NOTES,
  GET_NOTE,
  ADDING,
  ADDED,
  ERROR} from '../actions';

const initialState = {
  notes: [],
  note: null,
  fetchingNotes: false,
  fetchingNote: false,
  savingNote: false,
  updatingNote: false,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {...state, fetchingNotes: true,}
    case GET_NOTES:
      return {...state, notes: action.payload, fetchingNotes: false}
    case FETCHING_NOTE:
      return {...state, fetchingNote: true,}
    case GET_NOTE:
      return {...state, note: action.payload, fetchingNote: false,}
    case ADDING:
      return {...state, savingNote: true}
    case ADDED:
      return {...state, savingNote: false};
    case ERROR:
      return {...state, error: action.payload}
    default:
      return state;
  }
}