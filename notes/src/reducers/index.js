//reducers

import { FETCHING_NOTES, NOTES_RECIEVED, ERROR } from '../actions';

const initialState = {
  notes: [],
  fetchingNotes: false,
  notesRecieved: false,
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
        note: action.payload,
      })
    case ERROR:
      return Object.assing({}, state, {
        fetchingNotes: false,
        notesRecieved: false,
        error: true,
        status: action.payload,
      })
    default:
      return state;
  }
}
