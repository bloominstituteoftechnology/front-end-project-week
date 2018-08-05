
const initialState = {
  notes: [{title: '', textBody: ''}],
  gettingNotes: false,
  savingNote: false,
  deletingNote: false,
  editingNote: false,
  error: null,
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GETTING_NOTES':
      return { ...state, gettingNotes: true };
    case 'GET_NOTES':
      return { ...state, notes: action.notes, gettingNotes: false };
    case 'SAVING_NOTE':
      return { ...state, savingNote: true }
    case 'SAVE_NOTE':
      return { ...state, notes: [...state.notes, {title: action.note.title, textBody: action.note.textBody}] };
    case 'DELETE_NOTE':
      return { 
        ...state,
        notes: state.notes.filter((note) => note._id !== action.id)
      }

    case 'EDIT_NOTE':
      return state.notes.map((note) => {
        if (note.id === action.id) {
          return {
            ...note,
            ...action.changedNote
          };
        } else {
          return note;
        }
      });
    case 'ERROR':
      return {
        ...state,
        gettingNotes: false,
        savingNote: false,
        deletingNote: false,
        editingNote: false,
        error: action.error,
      };
    default:
      return state;
  };
};

export default notesReducer;