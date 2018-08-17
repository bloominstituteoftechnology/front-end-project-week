import { FETCHING_DATA, DATA_SUCCESS, DATA_ERROR, GET_NOTE, ADD_NOTE, GET_NOTE_SUCCESS, ADDED_SUCCESS } from '../actions';

const initialState = {
  addingNote: false,
  fetchingNotes: false,
  noteAddSuccess: false,
  fetchingNote: false,
  notes: [],
  error: null,
}

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        fetchingNotes: true
      };
    case DATA_SUCCESS:
      return {
        ...state,
        notes: [
          ...action.results
        ],
        fetchingNotes: false
      };
    case DATA_ERROR:
      return {
        ...state,
        fetchingNotes: false,
        error: action.error
      };
    case ADD_NOTE:
      return {
        ...state,
        addingNote: true,
      }
    case ADDED_SUCCESS:
      return {
        ...state,
        noteAddSuccess: true,
        addingNote: false
      }
    case GET_NOTE:
      return {
        ...state,
        fetchingNote: true
      }
    case GET_NOTE_SUCCESS:
      return {
        ...state,
        fetchingNote: false
      }
    default:
      return state;
  }
}