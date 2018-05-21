// Data
import notes from '../data/notes';

// Action types
import {
  ADD_NOTE,
  UPDATE_NOTE,
  TOGGLE_MODAL,
  DELETE_NOTE,
  SELECT_NOTE,
  SORT_NOTES,
} from '../actions';

const initialState = {
  notes: notes,
  id: notes.length + 1,
  modalVisible: false,
  selectedNote: {},
  sortType: 'id',
};

const sortNotes = (notes, sortType, prop) => {
  let notesCopy = notes.slice(0);
  if (sortType === prop) return notesCopy.reverse();
  return notesCopy.sort((a,b) => {
    if (a[prop] < b[prop]) return -1;
    if (a[prop] > b[prop]) return 1;
    return 0;
  })
}

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
    case SORT_NOTES:
    console.log(action);
    return {
      ...state,
      notes: sortNotes(state.notes, state.sortType, action.payload),
      sortType: action.payload,
    }
    default:
      return state;
  }
};

export default reducer;
