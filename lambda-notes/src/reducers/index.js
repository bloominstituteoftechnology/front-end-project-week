import {FETCHING, GET_NOTES, ADDING, ADDED, ERROR} from '../actions';

const initialState = {
  notes: [],
  fetchingNotes: false,
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