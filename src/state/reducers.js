import { combineReducers } from 'redux'
import {
  USER_REGISTER_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
  USER_SET_TOKEN,
  USER_NOTES_FETCH_SUCCESS,
  NOTE_FETCH_SUCCESS
} from './actions'

const initialState = {
  sessionToken: null,
  currentUser: null,
  userNotes: [],
  currentNote: null,
}

const sessionToken = (token, action) => {
  switch (action.type) {
    case USER_SET_TOKEN:
      return action.payload
    case USER_LOGOUT_SUCCESS:
      return null
    default:
      return token
  }
}

const currentUser = (user, action) => {
  switch (action.type) {
    case USER_REGISTER_SUCCESS:
    case USER_LOGIN_SUCCESS:
      return action.payload
    case USER_LOGOUT_SUCCESS:
      return null
    default:
      return user
  }
}

const userNotes = (notes, action) => {
  switch (action.type) {
    case USER_NOTES_FETCH_SUCCESS:
      return action.payload
    case USER_LOGOUT_SUCCESS:
      return []
    default:
      return notes
  }
}

const currentNote = (note, action) => {
  switch (action.type) {
    case NOTE_FETCH_SUCCESS:
      return action.payload
    case USER_LOGOUT_SUCCESS:
      return null
    default:
      return note
  }
}

export default combineReducers({
  sessionToken,
  currentUser,
  userNotes,
  currentNote
})