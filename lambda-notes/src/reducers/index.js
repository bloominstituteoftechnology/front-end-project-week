import {
  FETCH_NOTES_START,
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_FAILURE,
  ADD_NOTE_START,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_FAILURE,
  EDIT_NOTE_START,
  EDIT_NOTE_SUCCESS,
  EDIT_NOTE_FAILURE,
  DELETE_NOTE_START,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAILURE,
  SINGLE_NOTE_START,
  SINGLE_NOTE_SUCCESS,
  SINGLE_NOTE_FAILURE
} from "../actions";

let sum = 0;

const initialState = {
  notes: [],
  isFetching: false,
  error: null,
  singleNote: [],
  serverConfirmation: {
    response: [],
    count: sum
  }
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTES_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_NOTES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        notes: action.payload,
        error: null
      };
    case FETCH_NOTES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case ADD_NOTE_START:
      return {
        ...state,
        isFetching: true
      };
    case ADD_NOTE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        serverConfirmation: {
          response: action.payload,
          count: (sum += 1)
        }
      };
    case ADD_NOTE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case EDIT_NOTE_START:
      return {
        ...state,
        isFetching: true
      };
    case EDIT_NOTE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        serverConfirmation: {
          response: action.payload,
          count: (sum += 1)
        }
      };
    case EDIT_NOTE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case DELETE_NOTE_START:
      return {
        ...state,
        isFetching: true
      };
    case DELETE_NOTE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        serverConfirmation: {
          response: action.payload,
          count: (sum += 1)
        }
      };
    case DELETE_NOTE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case SINGLE_NOTE_START:
      return {
        ...state,
        isFetching: true
      };
    case SINGLE_NOTE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        singleNote: action.payload
      };
    case SINGLE_NOTE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default notesReducer;
