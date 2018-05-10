import {
  FETCH_NOTES,
  NOTES_FETCHED,
  FETCH_NOTE,
  NOTE_FETCHED,
  CREATE_NOTE,
  NOTE_CREATED,
  UPDATE_NOTE,
  NOTE_UPDATED,
  DELETE_NOTE,
  NOTE_DELETED,
  ERROR,
} from '../actions/types'

const defaultState = {
  notes: [],
  activeNote: {},
  pending: false,
  error: null,
}

export const notesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_NOTES:
      return { ...state, pending: true }
    case NOTES_FETCHED:
      return { ...state, pending: false, notes: action.payload }
    case FETCH_NOTE:
      return { ...state, pending: true, activeNote: {} }
    case NOTE_FETCHED:
      return { ...state, pending: false, activeNote: action.payload }

    case CREATE_NOTE:
      return { ...state, pending: true }
    case NOTE_CREATED:
      return { ...state, pending: false }

    case UPDATE_NOTE:
      return { ...state, pending: true, activeNote: action.payload }
    case NOTE_UPDATED:
      return { ...state, pending: false, activeNote: {} }

    case DELETE_NOTE:
      return { ...state, pending: true }
    case NOTE_DELETED:
      return { ...state, pending: false }

    case ERROR:
      return { ...state, pending: false, error: action.error }
    default:
      return state
  }
}
