import { combineReducers } from 'redux'
import {
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT_SUCCESS,
  USER_SET_TOKEN,
  USER_NOTES_FETCH_SUCCESS,
  NOTE_CREATE_SUCCESS,
  NOTE_FETCH_SUCCESS,
  NOTE_UPDATE_SUCCESS,
  NOTE_DELETE_SUCCESS,
  CLEAR_FLASH_MESSAGE
} from './actionTypes'

const sessionToken = (token = null, action) => {
  switch (action.type) {
    case USER_SET_TOKEN:
      return action.payload
    case USER_LOGOUT_SUCCESS:
      return null
    default:
      return token
  }
}

const currentUser = (user = null, action) => {
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

const userNotes = (notes = [], action) => {
  switch (action.type) {
    case USER_NOTES_FETCH_SUCCESS:
      return action.payload
    case NOTE_CREATE_SUCCESS:
      return notes.concat(action.payload)
    case USER_LOGOUT_SUCCESS:
      return []
    default:
      return notes
  }
}
const blankNote = { title: '', content: '' }
const currentNote = (note = blankNote, action) => {
  switch (action.type) {
    case NOTE_FETCH_SUCCESS:
      return action.payload
    case USER_LOGOUT_SUCCESS:
    case NOTE_DELETE_SUCCESS:
    case NOTE_UPDATE_SUCCESS:
      return blankNote
    default:
      return note
  }
}

const flashMessage = (message = '', action) => {
  switch(action.type) {
    case CLEAR_FLASH_MESSAGE:
    case USER_LOGIN_SUCCESS:
    case USER_REGISTER_SUCCESS:
      return ''
    case USER_LOGIN_FAILURE:
    case USER_REGISTER_FAILURE:
      return action.payload
    default:
      return message
  }
}

export default combineReducers({
  sessionToken,
  currentUser,
  userNotes,
  currentNote,
  flashMessage
})