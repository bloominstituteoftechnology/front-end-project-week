import {
  FETCHING_NOTES,
  FETCHING_NOTES_SUCCESSFUL,
  FETCHING_NOTES_FAILURE,
  CREATING_NOTE,
  CREATING_NOTE_SUCESSFULL,
  CREATING_NOTE_FAILURE,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAILURE,
  UPDATE_SUCCESSFUL,
  UPDATE_FAILURE,
  IS_REGISTERING,
  REGISTER_SUCCESSFUL,
  REGISTER_FAILURE,
  IS_LOGGING_IN,
  LOGIN_SUCCESSFUL,
  LOGIN_FAILURE
} from "../actions";

const initialState = {
  notes: [],
  message: null,
  isFetching: false,
  fetched: true,
  error: null,
  isPosting: false,
  posted: false,
  gotOne: null,
  updated: false,
  deleted: false,
  isLoggedIn: false,
  user: {},
  token: null,
  isRegstering: false,
  isLoggingIn: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_NOTES:
      return Object.assign({}, state, { isFetching: true });
    case FETCHING_NOTES_SUCCESSFUL:
      return Object.assign({}, state, {
        notes: [...action.payload.notes],
        message: action.payload.message,
        isFetching: false,
        fetched: true
      });
    case FETCHING_NOTES_FAILURE:
      return Object.assign({}, state, {
        error: action.payload,
        fetched: false,
        isFetching: false
      });
    case CREATING_NOTE:
      return Object.assign({}, state, { isPosting: true });
    case CREATING_NOTE_SUCESSFULL:
      return Object.assign({}, state, {
        isPosting: false,
        posted: true
      });
    case CREATING_NOTE_FAILURE:
      return Object.assign({}, state, {
        isPosting: false,
        posted: false,
        error: action.payload
      });
    case DELETE_NOTE_SUCCESS:
      return Object.assign({}, state, { deleted: true });
    case DELETE_NOTE_FAILURE:
      return Object.assign({}, state, {
        error: action.payload,
        deleted: false
      });
    case UPDATE_SUCCESSFUL:
      return Object.assign({}, state, { updated: true });
    case UPDATE_FAILURE:
      return Object.assign({}, state, {
        error: action.payload,
        updated: false
      });
    case IS_REGISTERING:
      // doing it the ES6 way for fun...
      return {...state, isRegstering: true};
    case REGISTER_SUCCESSFUL:
      return Object.assign({}, state, {
        isLoggedIn: true,
        message: action.payload.message,
        user: action.payload.user,
        token: action.payload.token,
        isRegstering: false
      });
    case REGISTER_FAILURE:
      return Object.assign({}, state, {
        isLoggedIn: false,
        isRegstering: false
      });
    case IS_LOGGING_IN:
      return Object.assign({}, state, {
        isLoggingIn: true
      })
    case LOGIN_SUCCESSFUL:
      return Object.assign({}, state, {
        isLoggedIn: true,
        message: action.payload.message,
        user: action.payload.user,
        token: action.payload.token,
        isLoggingIn: false
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isLoggedIn: false,
        isLoggingIn: false
      })
    default:
      return state;
  }
};
