import {
  GET_ALL_NOTES,
  GET_ALL_NOTES_SUCCESS,
  GET_ALL_NOTES_FAILURE,
  GET_NOTE,
  GET_NOTE_SUCCESS,
  GET_NOTE_FAILURE
} from '../actions';

const initalState = {
  notes: [],
  note: {},
  isFetching: false,
  isFetchingNote: false,
  error: null
};

export const notesReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_ALL_NOTES:
      return {
        ...state,
        isFetching: true
      };
    case GET_ALL_NOTES_SUCCESS:
      return {
        ...state,
        notes: [...action.payload],
        isFetching: false
      };
    case GET_ALL_NOTES_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    case GET_NOTE:
      return {
        ...state,
        isFetchingNote: true
      };
    case GET_NOTE_SUCCESS:
      return {
        ...state,
        note: { ...action.payload },
        isFetchingNote: false
      };
    case GET_NOTE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetchingNote: false
      };
    default:
      return state;
  }
};
