// Data
import notes from '../data/notes';

// Action types
import {
  ADD_NOTE,
  UPDATE_NOTE,
  TOGGLE_MODAL,
  DELETE_NOTE,
  SELECT_NOTE,
} from '../actions';

const initialState = {
  notes: [],
  id: 1,
  modalVisible: false,
  selectedNote: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      const newNote = {
        ...action.payload,
        id: state.id,
      };
      return {
        ...state,
        notes: [...state.notes, newNote],
        id: state.id + 1,
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map(note => {
          if (note.id !== action.payload.id) return note;
          return action.payload;
        }),
        selectedNote: action.payload
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        modalVisible: !state.modalVisible,
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== state.selectedNote.id),
        modalVisible: !state.modalVisible,
        selectedNote: {},
      };
    case SELECT_NOTE:
      return {
        ...state,
        selectedNote: state.notes.filter(note => note.id === action.payload)[0],
      }
    default:
      return state;
  }
};

export default reducer;
