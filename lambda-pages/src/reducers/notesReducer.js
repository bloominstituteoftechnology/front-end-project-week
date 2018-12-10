import {
  GET_ALL_NOTES,
  GET_ALL_NOTES_SUCCESS,
  GET_ALL_NOTES_FAILURE,
  GET_NOTE,
  GET_NOTE_SUCCESS,
  GET_NOTE_FAILURE,
  ADD_NOTE,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_FAILURE,
  UPDATE_NOTE,
  UPDATE_NOTE_SUCCESS,
  UPDATE_NOTE_FAILURE,
  DELETE_NOTE,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAILURE
} from '../actions';

const initalState = {
  notes: [],
  note: {},
  isFetching: false,
  isFetchingNote: false,
  isAddingNote: false,
  isUpdatingNote: false,
  isDeletingNote: false,
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
        notes: [...action.payload.reverse()],
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
    case ADD_NOTE:
      return {
        ...state,
        isAddingNote: true
      };
    case ADD_NOTE_SUCCESS:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
        isAddingNote: false
      };
    case ADD_NOTE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isAddingNote: false
      };
    case UPDATE_NOTE:
      return {
        ...state,
        isUpdatingNote: true
      };
    case UPDATE_NOTE_SUCCESS:
      let index;
      state.notes.forEach(
        (note, i) => (note._id === action.payload._id ? (index = i) : null)
      );
      const newStateNotes = [...state.notes];
      newStateNotes.splice(index, 1, action.payload);
      return {
        ...state,
        notes: [...newStateNotes],
        isUpdatingNote: false
      };
    case UPDATE_NOTE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isUpdatingNote: false
      };
    case DELETE_NOTE:
      return {
        ...state,
        isDeletingNote: true
      };
    case DELETE_NOTE_SUCCESS:
      const newNotes = state.notes.filter(note => note._id !== action.payload);
      return {
        ...state,
        notes: [...newNotes],
        isDeletingNote: false
      };
    case DELETE_NOTE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isDeletingNote: false
      };
    default:
      return state;
  }
};

// H