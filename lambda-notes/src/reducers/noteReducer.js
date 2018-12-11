import {
  FETCH_NOTE_ID,
  FETCH_NOTE_ID_FAILURE,
  FETCH_NOTE_ID_SUCCESS,
  PUT_NOTE_SUCCESS,
} from '../actions';

const initialNoteState = {
  note: null,
  fetchingNote: false,
  error: null,
}

export const noteReducer = (state = initialNoteState, action) => {
  switch (action.type) {
    case FETCH_NOTE_ID:
      return {
        ...state,
        fetchingNote: true,
      };

    case FETCH_NOTE_ID_SUCCESS:
      return {
        ...state,
        note: action.payload,
        fetchingNote: false,
      };

    case FETCH_NOTE_ID_FAILURE:
      return {
        ...state,
        fetchingNote: false,
        error: action.payload,
      };

    case PUT_NOTE_SUCCESS:
      return {
        ...state,
        note: action.payload, 
      }

    default:
    return state;
  }
}
