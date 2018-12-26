import { FETCHING_DATA, DATA_SUCCESS, DATA_ERROR, GET_NOTE, ADD_NOTE, GET_NOTE_SUCCESS, ADDED_SUCCESS, EDIT_NOTE, EDIT_NOTE_SUCCESS, DELETE_NOTE, NOTE_DELETED } from '../actions';

const initialState = {
  addingNote: false,
  fetchingNotes: false,
  noteAddSuccess: false,
  fetchingNote: false,
  edittingNote: false,
  noteEditSuccess: false,
  deletingNote: false,
  noteDeleted: false,
  notes: [],
  error: null,
  currentNote: null
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
        fetchingNotes: false,
        noteAddSuccess: false,
        noteDeleted: false,
        noteEditSuccess: false,
        currentNote: null
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
        addingNote: false,
      }
    case GET_NOTE:
      return {
        ...state,
        fetchingNote: true,
        noteEditSuccess: false,
      }
    case GET_NOTE_SUCCESS:
      return {
        ...state,
        fetchingNote: false,
        currentNote: action.result,
      }
    case EDIT_NOTE:
      return {
        ...state,
        edittingNote: true,
      }
    case EDIT_NOTE_SUCCESS:
      return {
        ...state,
        edittingNote: false,
        noteEditSuccess: true,
      }
    case DELETE_NOTE:
      return {
        ...state,
        deletingNote: true,
      }
    case NOTE_DELETED:
      return {
        ...state,
        noteDeleted: true,
        deletingNote: false
      }
    default:
      return state;
  }
}