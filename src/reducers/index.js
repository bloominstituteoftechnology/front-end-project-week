import {
  FETCHING_NOTES,
  NOTES_RECIEVED,
  ERROR,
  NOTE_ADDED,
  ADDING_NOTE,
  DELETING_NOTE,
  NOTE_DELETED,
  EDITING_NOTE,
  NOTE_EDITED,
  SORT_NOTE,
  SENDING_NEW_USERDATA,
  USER_CREATED,
  SENDING_CREDENTIALS,
  CREDENTIALS_ACCEPTED,
  FAILED_LOGIN_ATTEMPT,
  FAILED_REGISTRATION_ATTEMPT,
  CLEAR_NOTES,
} from '../actions';

const initialState = {
  notes: [],
  addingNote: false,
  noteAdded: false,
  fetchingNotes: false,
  notesRecieved: false,
  status: '',
  error: null,
  failedLoginAttempt: false,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_NOTES: 
      return Object.assign({}, state, {
        notes: [],
      })
    case FAILED_REGISTRATION_ATTEMPT:
      return Object.assign({}, state, {
        failedRegistrationAttempt: true,
      })
    case FAILED_LOGIN_ATTEMPT:
      return Object.assign({}, state, {
        failedLoginAttempt: true,
      })
    case SENDING_CREDENTIALS:
      return Object.assign({}, state, {
        sendingCredentials: true,
        sucessfulLogin: false,
      })
    case CREDENTIALS_ACCEPTED:
      return Object.assign({}, state, {
        sucessfulLogin: true,
        failedLoginAttempt: false,
        failedRegistrationAttempt: false,
        sendingCredentials: false,
        token: action.payload.token,
        username: action.payload.username
      })
    case SENDING_NEW_USERDATA:
      return Object.assign({}, state, {
        sendingNewUser: true,
      })
    case USER_CREATED:
      return Object.assign({}, state, {
        sendingNewUser: false,
        failedRegistrationAttempt: false,
        userCreated: true,
        username: action.payload.username,
        token: action.payload.token
      })
    case FETCHING_NOTES:
      return Object.assign({}, state, {
        fetchingNotes: true,
      })
    case NOTES_RECIEVED:
      return Object.assign({}, state, {
        fetchingNotes: false,
        notesRecieved: true,
        notes: action.payload.allUserNotes,
        username: action.payload.username
      })
    case ADDING_NOTE:
      return Object.assign({}, state, {
        addingNote: true,
      })
    case NOTE_ADDED:
      return Object.assign({}, state, {
        addingNote: false,
        noteAdded: true,
        status: action.payload,
      })
    case DELETING_NOTE:
      return Object.assign({}, state, {
        deletingNote: true,
      })
    case NOTE_DELETED:
      return Object.assign({}, state, {
        deletingNote: false,
        noteDeleted: true,
        status: action.payload,
      })
    case EDITING_NOTE:
      return Object.assign({}, state, {
        editingNote: true,
      })
    case NOTE_EDITED:
      return Object.assign({}, state, {
        editingNote: false,
        noteEdited: true,
        status: action.payload,
      })
    case ERROR:
      return Object.assign({}, state, {
        fetchingNotes: false,
        notesRecieved: false,
        addingNote: false,
        noteAdded: false,
        error: true,
        status: action.payload,
      })
    case SORT_NOTE:
      return Object.assign({}, state, {
        customSort: true,
        notes: action.payload,
      })
    default:
      return state;
  }
}